
import { NavItem, PracticeArea, Attorney } from './types';

export const NAVIGATION: NavItem[] = [
  { label: 'Início', href: '#/' },
  { label: 'O Escritório', href: '#/sobre' },
  { label: 'Práticas', href: '#/areas' },
  { label: 'Equipe', href: '#/equipe' },
  { label: 'Contato', href: '#/contato' },
];

export const PRACTICES: PracticeArea[] = [
  {
    id: 'corp',
    title: 'Fusões & Estratégia',
    description: 'Assessoria em transações bilionárias e estruturação jurídica de holdings internacionais.',
    icon: 'account_balance'
  },
  {
    id: 'crim',
    title: 'Crimes de Colarinho Branco',
    description: 'Defesa sofisticada em casos de alta complexidade em instâncias superiores e tribunais internacionais.',
    icon: 'shield_person'
  },
  {
    id: 'fam',
    title: 'Gestão Patrimonial',
    description: 'Proteção de ativos familiares e planejamento sucessório para grandes fortunas com discrição absoluta.',
    icon: 'balance'
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'vance',
    name: 'Alexander Vance, Esq.',
    role: 'Sócio Fundador',
    description: 'Estrategista-chefe com foco em contencioso de alto risco e arbitragem internacional.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'sterling',
    name: 'Victoria Sterling',
    role: 'Sócia Gestora',
    description: 'Lidera a área de fusões e aquisições com histórico de R$ 5bi em transações fechadas.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    id: 'thorne',
    name: 'Julian Thorne',
    role: 'Líder Criminalista',
    description: 'Referência em defesa criminal econômica e negociações complexas com órgãos reguladores.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  }
];
