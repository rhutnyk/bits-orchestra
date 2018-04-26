// kentico cloud
import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';
import { Testimonial } from './ContentTypes/Testimonial';

const projectId = '6dea43b2-30ae-4f99-8da8-c29d0caa3870';
const previewApiKey = "";

// configure type resolvers
const typeResolvers = [
    new TypeResolver('testimonial', () => new Testimonial()),
];

function isPreview() {
    return previewApiKey !== "";
}

export let Client = new DeliveryClient(
    new DeliveryClientConfig(projectId, typeResolvers,
        {
            enablePreviewMode: isPreview(),
            previewApiKey
        }
    )
) 
