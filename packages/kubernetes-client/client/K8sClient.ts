/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { FetchHttpRequest } from "./core/FetchHttpRequest";

import { AdmissionregistrationService } from "./services/AdmissionregistrationService";
import { AdmissionregistrationV1Service } from "./services/AdmissionregistrationV1Service";
import { ApiextensionsService } from "./services/ApiextensionsService";
import { ApiextensionsV1Service } from "./services/ApiextensionsV1Service";
import { ApiregistrationService } from "./services/ApiregistrationService";
import { ApiregistrationV1Service } from "./services/ApiregistrationV1Service";
import { ApisService } from "./services/ApisService";
import { AppsService } from "./services/AppsService";
import { AppsV1Service } from "./services/AppsV1Service";
import { AuthenticationService } from "./services/AuthenticationService";
import { AuthenticationV1Service } from "./services/AuthenticationV1Service";
import { AuthorizationService } from "./services/AuthorizationService";
import { AuthorizationV1Service } from "./services/AuthorizationV1Service";
import { AutoscalingService } from "./services/AutoscalingService";
import { AutoscalingV1Service } from "./services/AutoscalingV1Service";
import { AutoscalingV2Service } from "./services/AutoscalingV2Service";
import { BatchService } from "./services/BatchService";
import { BatchV1Service } from "./services/BatchV1Service";
import { CertificatesService } from "./services/CertificatesService";
import { CertificatesV1Service } from "./services/CertificatesV1Service";
import { CiliumIoV2Service } from "./services/CiliumIoV2Service";
import { CoordinationService } from "./services/CoordinationService";
import { CoordinationV1Service } from "./services/CoordinationV1Service";
import { CoreService } from "./services/CoreService";
import { DiscoveryService } from "./services/DiscoveryService";
import { DiscoveryV1Service } from "./services/DiscoveryV1Service";
import { EventsService } from "./services/EventsService";
import { EventsV1Service } from "./services/EventsV1Service";
import { FlowcontrolApiserverService } from "./services/FlowcontrolApiserverService";
import { FlowcontrolApiserverV1Beta2Service } from "./services/FlowcontrolApiserverV1Beta2Service";
import { FlowcontrolApiserverV1Beta3Service } from "./services/FlowcontrolApiserverV1Beta3Service";
import { LogsService } from "./services/LogsService";
import { NetworkingService } from "./services/NetworkingService";
import { NetworkingV1Service } from "./services/NetworkingV1Service";
import { NodeService } from "./services/NodeService";
import { NodeV1Service } from "./services/NodeV1Service";
import { OpenidService } from "./services/OpenidService";
import { PolicyService } from "./services/PolicyService";
import { PolicyV1Service } from "./services/PolicyV1Service";
import { RbacAuthorizationService } from "./services/RbacAuthorizationService";
import { RbacAuthorizationV1Service } from "./services/RbacAuthorizationV1Service";
import { ResolutionTektonDevV1Alpha1Service } from "./services/ResolutionTektonDevV1Alpha1Service";
import { ResolutionTektonDevV1Beta1Service } from "./services/ResolutionTektonDevV1Beta1Service";
import { SchedulingService } from "./services/SchedulingService";
import { SchedulingV1Service } from "./services/SchedulingV1Service";
import { SnapshotStorageV1Service } from "./services/SnapshotStorageV1Service";
import { StorageService } from "./services/StorageService";
import { StorageV1Service } from "./services/StorageV1Service";
import { StorageV1Beta1Service } from "./services/StorageV1Beta1Service";
import { TektonDevV1Service } from "./services/TektonDevV1Service";
import { TektonDevV1Alpha1Service } from "./services/TektonDevV1Alpha1Service";
import { TektonDevV1Beta1Service } from "./services/TektonDevV1Beta1Service";
import { VersionService } from "./services/VersionService";
import { WellKnownService } from "./services/WellKnownService";

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class K8sClient {
  public readonly admissionregistration: AdmissionregistrationService;
  public readonly admissionregistrationV1: AdmissionregistrationV1Service;
  public readonly apiextensions: ApiextensionsService;
  public readonly apiextensionsV1: ApiextensionsV1Service;
  public readonly apiregistration: ApiregistrationService;
  public readonly apiregistrationV1: ApiregistrationV1Service;
  public readonly apis: ApisService;
  public readonly apps: AppsService;
  public readonly appsV1: AppsV1Service;
  public readonly authentication: AuthenticationService;
  public readonly authenticationV1: AuthenticationV1Service;
  public readonly authorization: AuthorizationService;
  public readonly authorizationV1: AuthorizationV1Service;
  public readonly autoscaling: AutoscalingService;
  public readonly autoscalingV1: AutoscalingV1Service;
  public readonly autoscalingV2: AutoscalingV2Service;
  public readonly batch: BatchService;
  public readonly batchV1: BatchV1Service;
  public readonly certificates: CertificatesService;
  public readonly certificatesV1: CertificatesV1Service;
  public readonly ciliumIoV2: CiliumIoV2Service;
  public readonly coordination: CoordinationService;
  public readonly coordinationV1: CoordinationV1Service;
  public readonly core: CoreService;
  public readonly discovery: DiscoveryService;
  public readonly discoveryV1: DiscoveryV1Service;
  public readonly events: EventsService;
  public readonly eventsV1: EventsV1Service;
  public readonly flowcontrolApiserver: FlowcontrolApiserverService;
  public readonly flowcontrolApiserverV1Beta2: FlowcontrolApiserverV1Beta2Service;
  public readonly flowcontrolApiserverV1Beta3: FlowcontrolApiserverV1Beta3Service;
  public readonly logs: LogsService;
  public readonly networking: NetworkingService;
  public readonly networkingV1: NetworkingV1Service;
  public readonly node: NodeService;
  public readonly nodeV1: NodeV1Service;
  public readonly openid: OpenidService;
  public readonly policy: PolicyService;
  public readonly policyV1: PolicyV1Service;
  public readonly rbacAuthorization: RbacAuthorizationService;
  public readonly rbacAuthorizationV1: RbacAuthorizationV1Service;
  public readonly resolutionTektonDevV1Alpha1: ResolutionTektonDevV1Alpha1Service;
  public readonly resolutionTektonDevV1Beta1: ResolutionTektonDevV1Beta1Service;
  public readonly scheduling: SchedulingService;
  public readonly schedulingV1: SchedulingV1Service;
  public readonly snapshotStorageV1: SnapshotStorageV1Service;
  public readonly storage: StorageService;
  public readonly storageV1: StorageV1Service;
  public readonly storageV1Beta1: StorageV1Beta1Service;
  public readonly tektonDevV1: TektonDevV1Service;
  public readonly tektonDevV1Alpha1: TektonDevV1Alpha1Service;
  public readonly tektonDevV1Beta1: TektonDevV1Beta1Service;
  public readonly version: VersionService;
  public readonly wellKnown: WellKnownService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "",
      VERSION: config?.VERSION ?? "1.26.7",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.admissionregistration = new AdmissionregistrationService(this.request);
    this.admissionregistrationV1 = new AdmissionregistrationV1Service(
      this.request
    );
    this.apiextensions = new ApiextensionsService(this.request);
    this.apiextensionsV1 = new ApiextensionsV1Service(this.request);
    this.apiregistration = new ApiregistrationService(this.request);
    this.apiregistrationV1 = new ApiregistrationV1Service(this.request);
    this.apis = new ApisService(this.request);
    this.apps = new AppsService(this.request);
    this.appsV1 = new AppsV1Service(this.request);
    this.authentication = new AuthenticationService(this.request);
    this.authenticationV1 = new AuthenticationV1Service(this.request);
    this.authorization = new AuthorizationService(this.request);
    this.authorizationV1 = new AuthorizationV1Service(this.request);
    this.autoscaling = new AutoscalingService(this.request);
    this.autoscalingV1 = new AutoscalingV1Service(this.request);
    this.autoscalingV2 = new AutoscalingV2Service(this.request);
    this.batch = new BatchService(this.request);
    this.batchV1 = new BatchV1Service(this.request);
    this.certificates = new CertificatesService(this.request);
    this.certificatesV1 = new CertificatesV1Service(this.request);
    this.ciliumIoV2 = new CiliumIoV2Service(this.request);
    this.coordination = new CoordinationService(this.request);
    this.coordinationV1 = new CoordinationV1Service(this.request);
    this.core = new CoreService(this.request);
    this.discovery = new DiscoveryService(this.request);
    this.discoveryV1 = new DiscoveryV1Service(this.request);
    this.events = new EventsService(this.request);
    this.eventsV1 = new EventsV1Service(this.request);
    this.flowcontrolApiserver = new FlowcontrolApiserverService(this.request);
    this.flowcontrolApiserverV1Beta2 = new FlowcontrolApiserverV1Beta2Service(
      this.request
    );
    this.flowcontrolApiserverV1Beta3 = new FlowcontrolApiserverV1Beta3Service(
      this.request
    );
    this.logs = new LogsService(this.request);
    this.networking = new NetworkingService(this.request);
    this.networkingV1 = new NetworkingV1Service(this.request);
    this.node = new NodeService(this.request);
    this.nodeV1 = new NodeV1Service(this.request);
    this.openid = new OpenidService(this.request);
    this.policy = new PolicyService(this.request);
    this.policyV1 = new PolicyV1Service(this.request);
    this.rbacAuthorization = new RbacAuthorizationService(this.request);
    this.rbacAuthorizationV1 = new RbacAuthorizationV1Service(this.request);
    this.resolutionTektonDevV1Alpha1 = new ResolutionTektonDevV1Alpha1Service(
      this.request
    );
    this.resolutionTektonDevV1Beta1 = new ResolutionTektonDevV1Beta1Service(
      this.request
    );
    this.scheduling = new SchedulingService(this.request);
    this.schedulingV1 = new SchedulingV1Service(this.request);
    this.snapshotStorageV1 = new SnapshotStorageV1Service(this.request);
    this.storage = new StorageService(this.request);
    this.storageV1 = new StorageV1Service(this.request);
    this.storageV1Beta1 = new StorageV1Beta1Service(this.request);
    this.tektonDevV1 = new TektonDevV1Service(this.request);
    this.tektonDevV1Alpha1 = new TektonDevV1Alpha1Service(this.request);
    this.tektonDevV1Beta1 = new TektonDevV1Beta1Service(this.request);
    this.version = new VersionService(this.request);
    this.wellKnown = new WellKnownService(this.request);
  }
}
