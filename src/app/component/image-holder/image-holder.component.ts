/**
 * @author Ranjoy Sen
 * @email ranjoy.sen@rockwellcollins.com
 * @create date 2020-11-23 22:14:33
 * @modify date 2020-11-23 22:14:33
 * @desc Image holder component
 */

import { Component, Input, OnInit } from '@angular/core';
import { StringKey } from 'src/app/shared/constant/string.constant';

@Component({
	selector: 'image-holder',
	templateUrl: './image-holder.component.html',
	styleUrls: ['./image-holder.component.scss']
})
export class ImageHolderComponent implements OnInit {

	/**
	 * @description Input  of image holder component
	 */
	@Input() loader: string = StringKey.ICON_LOADER;

	/**
	 * @description Input  of image holder component
	 */
	@Input() height: number = 50;

	/**
	 * @description Input  of image holder component
	 */
	@Input() width: number = 50;

	/**
	 * @description Input  of image holder component
	 */
	@Input() image!: string;

	/**
	 * @description Determines whether loading is
	 */
	isLoading: boolean;

	/**
	 * Creates an instance of image holder component.
	 */
	constructor() {
		this.isLoading = true;
	}

	/**
	 * @description on init
	 */
	ngOnInit(): void {
	}

	/**
	 * @description Hides loader
	 */
	hideLoader() {
		this.isLoading = false;
	}

}
