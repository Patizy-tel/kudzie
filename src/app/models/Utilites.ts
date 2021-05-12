
import { ClrDatagridStateInterface } from '@clr/angular';


export class Utilities {
  constructor() {}

 
  static formatDatagridState(state: ClrDatagridStateInterface, page: number) {
    const filters: { [prop: string]: any } = {};

    if (state.filters) {
      const searchQueries = Object.values(state.filters)
        .map((val) => {
          return val.property + ':' + val.value;
        })
        .join(',');
      filters.search = searchQueries;
    }

    if (state.sort) {
      filters.sort = state.sort.by;
      filters.order = state.sort.reverse ? 'DESC' : 'ASC';
    }

    filters.page = page;
    filters.size = 10;

    return filters;
  }


}
