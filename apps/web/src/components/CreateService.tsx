import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useMutation } from "@apollo/client";
import { namedOperations } from "@/gql/graphql";
import { useRouter } from "next/router";
import { gql } from "@/gql";
import { ServiceForm } from "./ServiceForm";

export const CreateService = ({ projectId }: { projectId: number }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [createService] = useMutation(
    gql(`
          mutation CreateService($input: ServiceCreate!) {
            createService(input: $input) {
              id
            }
          }
        `),
    {
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.Services],
    },
  );
  return (
    <>
      <Button color="primary" className="mr-6" onPress={onOpen}>
        Create service
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create new service
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full max-w-sm flex-col items-center justify-center">
                  <ServiceForm
                    onSubmit={async (input) => {
                      const data = await createService({
                        variables: {
                          input: {
                            ...input,
                            projectId,
                          },
                        },
                      });

                      onClose();
                      setTimeout(() => {
                        void router.push(
                          `/projects/${projectId}/service/${data.data?.createService.id}`,
                        );
                      }, 1000);
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
