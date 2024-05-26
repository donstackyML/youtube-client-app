import { ResponseItem } from './search-item.model';

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Response {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ResponseItem[];
}
