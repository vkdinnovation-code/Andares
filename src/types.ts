import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  colorClass: string;
}

export interface IndustryTab {
  id: string;
  label: string;
  title: string;
  description: string;
  benefits: string[];
  link: string;
  quote?: {
    text: string;
    author: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: number;
  industry: string;
  title: string;
  result: string;
  image: string;
}