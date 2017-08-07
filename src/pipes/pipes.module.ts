import { NgModule } from '@angular/core';

import { KeysPipe } from './../pipes/keys/keys';
import { FromnowPipe } from '../pipes/fromnow/fromnow';

@NgModule({
	declarations: [FromnowPipe, KeysPipe],
	imports: [],
	exports: [FromnowPipe, KeysPipe]
})
export class PipesModule {}
