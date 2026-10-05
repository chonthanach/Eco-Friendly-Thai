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
  taglineTh?: string;
  description: string;
  descriptionTh?: string;
  longDescription?: string;
  longDescriptionTh?: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  wholesalePrice?: number;
  minWholesaleQty?: number;
  dimensions?: string;
  dimensionsTh?: string;
  weightKg?: number;
  coveragePerSqm?: string;
  cartonCount?: number; // Number of UHT cartons recycled per unit
  carbonOffsetKg?: number; // Carbon footprint kgCO2e saved/sequestered
  certification?: string;
  certificationTh?: string;
  warranty?: string;
  warrantyTh?: string;
  category: 'School & Furniture' | 'Building & Decor' | 'Paving & Ground' | 'Tile & Roof' | 'Industrial Pulp';
  imageUrl: string;
  brochureUrl?: string;
  gallery?: string[];
  rawMaterialImage?: string; // "Before" image (e.g. shredded UHT cartons)
  finishedMaterialImage?: string; // "After" image (finished upcycled material close-up)
  features: string[];
  featuresTh?: string[];
  inStock?: boolean;
}

export interface PlantSite {
  id: string;
  name: string;
  nameTh: string;
  location: string;
  locationTh?: string;
  capacity: string;
  capacityTh?: string;
  focus: string;
  focusTh?: string;
  description: string;
  descriptionTh?: string;
  imageUrl: string;
  established: string;
  establishedTh?: string;
  specs: { label: string; value: string }[];
  specsTh?: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  descriptionTh?: string;
  details: string;
  detailsTh?: string;
  iconName: string;
  outputCapacity: string;
  outputCapacityTh?: string;
  imageUrl: string;
  targetIndustries: string[];
  targetIndustriesTh?: string[];
}

export interface JournalArticle {
  id: number;
  title: string;
  titleTh?: string;
  date: string;
  dateTh?: string;
  excerpt: string;
  excerptTh?: string;
  category: string;
  categoryTh?: string;
  author?: string;
  authorTh?: string;
  image: string;
  content: React.ReactNode;
  contentTh?: React.ReactNode;
}

export interface PartnerCohort {
  name: string;
  role: string;
  roleTh?: string;
  logoText: string;
  description: string;
  descriptionTh?: string;
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

