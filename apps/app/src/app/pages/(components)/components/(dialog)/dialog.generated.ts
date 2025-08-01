// eslint-disable -- auto-generated
// prettier-ignore -- auto-generated
/*
DO NOT EDIT THIS FILE!!
It is automatically generated by the extract-primitive-code generator.
Instead, edit the `(dialog).preview.ts` file or the generator itself.
Run `pnpm run generate-snippets` to update this file.
*/

export const dialogCloseCode = `
import { Component, viewChild } from '@angular/core';
import {
	BrnDialogCloseDirective,
	BrnDialogComponent,
	BrnDialogContentDirective,
	BrnDialogTriggerDirective,
} from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogHeaderComponent,
	HlmDialogTitleDirective,
} from '@spartan-ng/helm/dialog';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'spartan-dialog-close-preview',
	imports: [
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		BrnDialogCloseDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogTitleDirective,
		HlmLabelDirective,
		HlmButtonDirective,
	],
	template: \`
		<hlm-dialog #dialogRef>
			<button id="edit-profile" brnDialogTrigger hlmBtn>Open</button>
			<hlm-dialog-content class="sm:max-w-[425px]" *brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h3 hlmDialogTitle>Dialog</h3>
				</hlm-dialog-header>
				<div class="grid gap-4 py-4">
					<div class="flex items-center justify-between gap-4">
						<label hlmLabel>Close dialog by directive</label>
						<button hlmBtn brnDialogClose>Close</button>
					</div>
					<div class="flex items-center justify-between gap-4">
						<label hlmLabel>Close dialog by reference</label>
						<button hlmBtn (click)="dialogRef.close({})">Close</button>
					</div>
					<div class="flex items-center justify-between gap-4">
						<label hlmLabel>Close dialog by viewchild reference</label>
						<button hlmBtn (click)="closeDialog()">Close</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class DialogClosePreviewComponent {
	public viewchildDialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.viewchildDialogRef()?.close({});
	}
}
`;

export const dialogContextMenuCode = `
import { Component } from '@angular/core';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { BrnContextMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/helm/dialog';

import {
	HlmMenuComponent,
	HlmMenuGroupComponent,
	HlmMenuItemDirective,
	HlmMenuShortcutComponent,
} from '@spartan-ng/helm/menu';

@Component({
	selector: 'spartan-dialog-context-menu',
	imports: [
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmDialogContentComponent,
		HlmDialogComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		HlmButtonDirective,
		BrnContextMenuTriggerDirective,
		HlmMenuItemDirective,
		HlmMenuShortcutComponent,
		HlmMenuComponent,
		HlmMenuGroupComponent,
	],
	template: \`
		<div
			[brnCtxMenuTriggerFor]="menu"
			class="border-border flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
		>
			Right click here
		</div>

		<ng-template #menu>
			<hlm-menu class="w-64">
				<hlm-menu-group>
					<button inset hlmMenuItem>
						Save
						<hlm-menu-shortcut>⌘S</hlm-menu-shortcut>
					</button>

					<button disabled inset hlmMenuItem>
						Archive
						<hlm-menu-shortcut>⌘A</hlm-menu-shortcut>
					</button>

					<hlm-dialog>
						<button hlmMenuItem inset="true" brnDialogTrigger>
							Print
							<hlm-menu-shortcut>⌘P</hlm-menu-shortcut>
						</button>
						<hlm-dialog-content *brnDialogContent="let ctx">
							<hlm-dialog-header>
								<h3 brnDialogTitle hlm>Print this page</h3>
								<p brnDialogDescription hlm>
									Are you sure you want to print this page? Only print if absolutely necessary! The less we print, the
									less paper we need, the better it is for our environment!
								</p>
							</hlm-dialog-header>
							<hlm-dialog-footer>
								<button hlmBtn variant="ghost" (click)="ctx.close()">Cancel</button>
								<button hlmBtn>Print</button>
							</hlm-dialog-footer>
						</hlm-dialog-content>
					</hlm-dialog>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class DialogContextMenuPreviewComponent {}
`;

export const dialogDeclarativeCode = `
import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { BrnDialogContentDirective } from '@spartan-ng/brain/dialog';

import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogHeaderComponent,
	HlmDialogTitleDirective,
} from '@spartan-ng/helm/dialog';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmH4Directive, HlmMutedDirective } from '@spartan-ng/helm/typography';
import { debounceTime, map } from 'rxjs/operators';

@Component({
	selector: 'spartan-dialog-declarative-preview',
	imports: [
		FormsModule,
		BrnDialogContentDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogTitleDirective,
		HlmDialogDescriptionDirective,
		HlmLabelDirective,
		HlmInputDirective,
		HlmMutedDirective,
		HlmH4Directive,
	],
	template: \`
		<div class="space-y-4">
			<p hlmH4>Enter passphrase to open dialog</p>
			<label hlmLabel>
				Passphrase
				<input
					name="passphrase"
					hlmInput
					[ngModelOptions]="{ standalone: true }"
					[ngModel]="passphrase()"
					(ngModelChange)="passphrase.set($event)"
				/>
				<span hlmMuted>Hint: It's sparta</span>
			</label>
		</div>
		<hlm-dialog [state]="state()" (closed)="passphrase.set('')">
			<hlm-dialog-content *brnDialogContent="let ctx">
				<hlm-dialog-header class="w-[250px]">
					<h3 hlmDialogTitle>Welcome to Sparta</h3>
					<p hlmDialogDescription>Enjoy declarative dialogs.</p>
				</hlm-dialog-header>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class DialogDeclarativePreviewComponent {
	protected readonly passphrase = signal<string>('');
	private readonly _debouncedState$ = toObservable(this.passphrase).pipe(
		debounceTime(500),
		map((passphrase) => (passphrase === 'sparta' ? 'open' : 'closed')),
	);
	protected readonly state = toSignal(this._debouncedState$, { initialValue: 'closed' as 'open' | 'closed' });
}
`;

export const dialogDynamicComponentCode = `
import { Component, inject } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCheck } from '@ng-icons/lucide';
import { BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogDescriptionDirective,
	HlmDialogHeaderComponent,
	HlmDialogService,
	HlmDialogTitleDirective,
} from '@spartan-ng/helm/dialog';
import { HlmTableImports } from '@spartan-ng/helm/table';

type ExampleUser = {
	name: string;
	email: string;
	phone: string;
};

@Component({
	selector: 'spartan-dialog-dynamic-component-preview',
	imports: [HlmButtonDirective, ...HlmTableImports],
	template: \`
		<button hlmBtn (click)="openDynamicComponent()">Select User</button>
	\`,
})
export class DialogDynamicComponentPreviewComponent {
	private readonly _hlmDialogService = inject(HlmDialogService);

	private readonly _users: ExampleUser[] = [
		{
			name: 'Helena Chambers',
			email: 'helenachambers@chorizon.com',
			phone: '+1 (812) 588-3759',
		},
		{
			name: 'Josie Crane',
			email: 'josiecrane@hinway.com',
			phone: '+1 (884) 523-3324',
		},
		{
			name: 'Lou Hartman',
			email: 'louhartman@optyk.com',
			phone: '+1 (912) 479-3998',
		},
		{
			name: 'Lydia Zimmerman',
			email: 'lydiazimmerman@ultrasure.com',
			phone: '+1 (944) 511-2111',
		},
	];

	public openDynamicComponent() {
		const dialogRef = this._hlmDialogService.open(SelectUserComponent, {
			context: {
				users: this._users,
			},
			contentClass: 'sm:!max-w-[750px]',
		});

		dialogRef.closed$.subscribe((user) => {
			if (user) {
				console.log('Selected user:', user);
			}
		});
	}
}

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'dynamic-content',
	imports: [HlmDialogHeaderComponent, HlmDialogTitleDirective, HlmDialogDescriptionDirective, ...HlmTableImports],
	providers: [provideIcons({ lucideCheck })],
	template: \`
		<hlm-dialog-header>
			<h3 hlmDialogTitle>Select user</h3>
			<p hlmDialogDescription>Click a row to select a user.</p>
		</hlm-dialog-header>

		<table hlmTable class="w-full">
			<tr hlmTr>
				<th hlmTh>Name</th>
				<th hlmTh>Email</th>
				<th hlmTh>Phone</th>
			</tr>
			@for (user of users; track user.name) {
				<tr hlmTr (click)="selectUser(user)" class="cursor-pointer">
					<td hlmTd truncate class="font-medium">{{ user.name }}</td>
					<td hlmTd>{{ user.email }}</td>
					<td hlmTd>{{ user.phone }}</td>
				</tr>
			}
		</table>
	\`,
	host: {
		class: 'flex flex-col gap-4',
	},
})
class SelectUserComponent {
	private readonly _dialogRef = inject<BrnDialogRef<ExampleUser>>(BrnDialogRef);
	private readonly _dialogContext = injectBrnDialogContext<{ users: ExampleUser[] }>();

	protected readonly users = this._dialogContext.users;

	public selectUser(user: ExampleUser) {
		this._dialogRef.close(user);
	}
}
`;

export const defaultCode = `
import { Component } from '@angular/core';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
	HlmDialogTitleDirective,
} from '@spartan-ng/helm/dialog';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'spartan-dialog-preview',
	imports: [
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		HlmDialogTitleDirective,
		HlmDialogDescriptionDirective,
		HlmLabelDirective,
		HlmInputDirective,
		HlmButtonDirective,
	],
	template: \`
		<hlm-dialog>
			<button id="edit-profile" brnDialogTrigger hlmBtn>Edit Profile</button>
			<hlm-dialog-content class="sm:max-w-[425px]" *brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h3 hlmDialogTitle>Edit profile</h3>
					<p hlmDialogDescription>Make changes to your profile here. Click save when you're done.</p>
				</hlm-dialog-header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<label hlmLabel for="name" class="text-right">Name</label>
						<input hlmInput id="name" value="Pedro Duarte" class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<label hlmLabel for="username" class="text-right">Username</label>
						<input hlmInput id="username" value="@peduarte" class="col-span-3" />
					</div>
				</div>
				<hlm-dialog-footer>
					<button hlmBtn type="submit">Save changes</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class DialogPreviewComponent {}
`;
