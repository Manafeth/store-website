
import { ContactUsData } from '../types/contactUs';
import { axiosInstance } from './axiosInstance';

function createContact(data: ContactUsData) {
    return axiosInstance.post(
        'ContactUs/Create',
        data
    );
}

export {
    createContact
};