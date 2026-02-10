export type * from './auth';
export type * from './navigation';
export type * from './ui';

import type { Auth } from './auth';

export type SharedData = {
    name: string;
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
};

export type Pagination<T> = {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
        path: string;
        per_page: number;
        to: number;
        total: number;
    };
};

export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    image_url?: string;
    category?: string;
    published_at?: string;
    author?: {
        name: string;
        avatar?: string;
        initials: string;
    };
    comments: any[]; // TODO: define Comment type properly
}
