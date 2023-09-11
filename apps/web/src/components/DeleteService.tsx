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
import { TrashIcon } from "lucide-react";
import { toast } from "react-toastify";

export const DeleteService = ({
  serviceId,
  projectId,
}: {
  serviceId: number;
  projectId: number;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [deleteService, mutation] = useMutation(
    gql(`
        mutation DeleteService($id: Int!) {
          deleteService(id: $id) {
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
      <Button isIconOnly onClick={onOpen}>
        <TrashIcon />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete service
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full max-w-sm flex-col items-center justify-center">
                  <p>Are you sure you want to delete this service?</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  isLoading={mutation.loading}
                  onPress={() => {
                    void toast
                      .promise(
                        deleteService({
                          variables: {
                            id: serviceId,
                          },
                        }),
                        {
                          pending: "Deleting service...",
                          success: "Service deleted",
                          error: "Failed to delete service",
                        },
                      )
                      .then(() => {
                        onClose();
                        setTimeout(() => {
                          void router.push(`/projects/${projectId}`);
                        }, 1000);
                      });
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
