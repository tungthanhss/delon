import { Inject, Pipe, PipeTransform } from '@angular/core';

import { AlainI18NService, ALAIN_I18N_TOKEN } from './i18n';

@Pipe({ name: 'i18n', standalone: true })
export class I18nPipe implements PipeTransform {
  constructor(@Inject(ALAIN_I18N_TOKEN) private i18n: AlainI18NService) {}

  transform(key: string, params?: Record<string, unknown>): string {
    return this.i18n.fanyi(key, params);
  }
}
