import { AfterViewInit, Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';

let uniqueId = 0;

@Directive({
	selector: '[brnCalendarHeader]',
	host: {
		'[id]': 'id()',
		'aria-live': 'polite',
		role: 'presentation',
	},
})
export class BrnCalendarHeaderDirective implements AfterViewInit {
	private readonly _elementRef = inject(ElementRef);
	private readonly _renderer = inject(Renderer2);

	/** The unique id for the header */
	public readonly id = input(`brn-calendar-header-${uniqueId++}`);

	ngAfterViewInit(): void {
		this.findAndAddClassToOverlayOrigin();
	}

	// Remove the margin provided by the cdk-overlay on the hlm-select component
	private findAndAddClassToOverlayOrigin(): void {
		const overlayOrigins = this._elementRef.nativeElement.querySelectorAll('[cdk-overlay-origin]');

		if (overlayOrigins) {
			overlayOrigins.forEach((overlayOrigin: HTMLElement) => {
				this._renderer.addClass(overlayOrigin, '!mt-0');
			});
		} else {
			this.searchInParents();
		}
	}

	private searchInParents(): void {
		let currentElement = this._elementRef.nativeElement.parentElement;

		while (currentElement) {
			const overlayOrigins = currentElement.querySelectoraLL('[cdk-overlay-origin]');

			if (overlayOrigins) {
				overlayOrigins.forEach((overlayOrigin: HTMLElement) => {
					this._renderer.addClass(overlayOrigin, '!mt-0');
				});
				break;
			}

			currentElement = currentElement.parentElement;
		}
	}
}
