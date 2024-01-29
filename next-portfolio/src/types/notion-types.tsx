// types/notion-types.ts

export interface NotionDatabaseResponse {
    object: 'list';
    results: NotionPage[];
    next_cursor: null | string;
    has_more: boolean;
    type: 'page_or_database';
    page_or_database: {};
    developer_survey: string;
    request_id: string;
}

export interface NotionPage {
    object: 'page';
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: NotionUser;
    last_edited_by: NotionUser;
    cover: {
        type: 'external';
        external: {
        url: string;
        };
    };
    icon: null;
    parent: {
        type: 'database_id';
        database_id: string;
    };
    archived: boolean;
    properties: {
        Tag: NotionMultiSelectProperty;
        GitHub: NotionUrlProperty;
        '\bDescription': NotionRichTextProperty;
        Role: NotionRichTextProperty;
        WorkPeriod: NotionDateProperty;
        Project: NotionTitleProperty;
      // Add more properties if necessary
    };
    url: string;
    public_url: null;
}

export interface NotionUser {
    object: 'user';
    id: string;
}

export interface NotionMultiSelectProperty {
    id: string;
    type: 'multi_select';
    multi_select: NotionOption[];
}

export interface NotionUrlProperty {
    id: string;
    type: 'url';
    url: string;
}

export interface NotionRichTextProperty {
    id: string;
    type: 'rich_text';
    rich_text: NotionText[];
}

export interface NotionText {
    type: 'text';
    text: {
    content: string;
    link: null;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
    plain_text: string;
    href: null;
}

export interface NotionTitleProperty {
    id: string;
    type: 'title';
    title: NotionText[];
}

export interface NotionDateProperty {
    id: string;
    type: 'date';
    date: {
    start: string;
    end: string;
    time_zone: null;
    };
}

export interface NotionOption {
    id: string;
    name: string;
    color: string;
}
