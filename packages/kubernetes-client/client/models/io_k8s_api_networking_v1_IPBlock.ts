/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.0/24","2001:db8::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export type io_k8s_api_networking_v1_IPBlock = {
    /**
     * CIDR is a string representing the IP Block Valid examples are "192.168.1.0/24" or "2001:db8::/64"
     */
    cidr: string;
    /**
     * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the CIDR range
     */
    except?: Array<string>;
};
