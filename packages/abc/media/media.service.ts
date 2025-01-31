import { Injectable } from '@angular/core';
import { Observable, Subject, share } from 'rxjs';

import { AlainConfigService, AlainMediaConfig } from '@delon/util/config';
import { LazyService } from '@delon/util/other';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private _cog!: AlainMediaConfig;
  private loading = false;
  private loaded = false;
  private notify$ = new Subject<void>();

  get cog(): AlainMediaConfig {
    return this._cog;
  }
  set cog(val: AlainMediaConfig) {
    this._cog = this.cogSrv.merge(
      'media',
      {
        urls: ['https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js', 'https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css']
      },
      val
    )!;
  }

  constructor(
    private cogSrv: AlainConfigService,
    private lazySrv: LazyService
  ) {}

  load(): this {
    if (this.loading) {
      if (this.loaded) {
        this.notify$.next();
      }
      return this;
    }
    this.loading = true;
    this.lazySrv.load(this.cog.urls!).then(() => {
      this.loaded = true;
      this.notify$.next();
    });
    return this;
  }

  notify(): Observable<void> {
    return this.notify$.asObservable().pipe(share());
  }
}
