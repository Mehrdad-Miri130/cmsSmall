import { IGlobalType } from 'core/types/globalType';

export interface IUser {
	id: number;
	email: string;
	role: string;
}

export interface IAuthor {
	id: number;
	email: string;
}

export interface IAuthorList extends IGlobalType {
	data: IAuthor[];
}
