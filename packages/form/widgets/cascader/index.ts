import type { SFWidgetProvideConfig } from '@delon/form';

import { CascaderWidget } from './widget';

export * from './widget';
export * from './schema';

export function withCascaderWidget(): SFWidgetProvideConfig {
  return { KEY: CascaderWidget.KEY, type: CascaderWidget };
}
