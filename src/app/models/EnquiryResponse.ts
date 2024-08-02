import { EnquiryResponseDTO } from './EnquiryResponseDTO';

export interface EnquiryResponse {
  noOfElements: number;
  enquiryList: EnquiryResponseDTO[];
}
