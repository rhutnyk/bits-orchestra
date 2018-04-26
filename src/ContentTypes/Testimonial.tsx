import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';

export class Testimonial extends ContentItem {
    name: Fields.TextField;
    title: Fields.TextField;
    email: Fields.TextField;
    company: Fields.TextField;
    feedback: Fields.TextField;
}