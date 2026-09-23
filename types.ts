/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Product {
  id: string;
  name: string;
  nameTh?: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  wholesalePrice?: number;
  minWholesaleQty?: number;
  dimensions?: string;
  weightKg?: number;
  coveragePerSqm?: string;
  cartonCount?: number; // Number of UHT cartons recycled per unit
  carbonOffsetKg?: number; // Carbon footprint kgCO2e saved/sequestered
  certification?: string;
  warranty?: string;
  category: 'School & Furniture' | 'Building & Decor' | 'Paving & Ground' | 'Tile & Roof' | 'Industrial Pulp';
  imageUrl: string;
  gallery?: string[];
  features: string[];
  inStock?: boolean;
}

export interface PlantSite {
  id: string;
  name: string;
  nameTh: string;
  location: string;
  capacity: string;
  focus: string;
  description: string;
  imageUrl: string;
  established: string;
  specs: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  details: string;
  iconName: string;
  outputCapacity: string;
  imageUrl: string;
  targetIndustries: string[];
}

export interface JournalArticle {
  id: number;
  title: string;
  titleTh?: string;
  date: string;
  excerpt: string;
  category: string;
  author?: string;
  image: string;
  content: React.ReactNode;
}

export interface PartnerCohort {
  name: string;
  role: string;
  logoText: string;
  description: string;
  website?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'plant', plant: PlantSite }
  | { type: 'checkout' };

