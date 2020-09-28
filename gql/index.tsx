import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** Get a document based on its URL slug */
  getDocumentBySlug?: Maybe<Document>;
  /**
   * Get a document based on its ID
   * @deprecated Unused resource, replaced by getDocumentBySlug
   */
  getDocumentDetails?: Maybe<Document>;
  /** Get all documents in the given subcategory */
  getDocumentsForSubcategory?: Maybe<Array<Maybe<Document>>>;
  /** Get all markers in the given subcategory */
  getMarkersForSubcategory?: Maybe<Array<Maybe<Marker>>>;
  /** Get all categories for the menu */
  getMenuItems?: Maybe<Array<Maybe<Category>>>;
  /** Get all documents in the given subcategory that have a specific marker on them */
  narrowSubcategory?: Maybe<Array<Maybe<Document>>>;
  /** Get all documents that match the given search query */
  performSearch?: Maybe<Array<Maybe<Document>>>;
};


export type QueryGetDocumentBySlugArgs = {
  slug?: Maybe<Scalars['String']>;
};


export type QueryGetDocumentDetailsArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetDocumentsForSubcategoryArgs = {
  subcategoryId?: Maybe<Scalars['ID']>;
};


export type QueryGetMarkersForSubcategoryArgs = {
  subcategoryId?: Maybe<Scalars['ID']>;
};


export type QueryNarrowSubcategoryArgs = {
  markerId?: Maybe<Scalars['ID']>;
  subcategoryId?: Maybe<Scalars['ID']>;
};


export type QueryPerformSearchArgs = {
  query?: Maybe<Scalars['String']>;
};

export type Subcategory = {
  __typename?: 'Subcategory';
  /** A globally unique subcategory ID */
  id?: Maybe<Scalars['ID']>;
  /** A user friendly name for the subcategory */
  name?: Maybe<Scalars['String']>;
  /** A URL friendly name for the subcategory */
  slug?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  /** The Github handle of the author */
  github?: Maybe<Scalars['String']>;
  /** The Github display name of the author, returns null if the user decided to keep it private */
  name?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  /** The absolute URL clients should use when fetching the icon for this category */
  iconUrl?: Maybe<Scalars['String']>;
  /** The unique ID of this category */
  id?: Maybe<Scalars['ID']>;
  /** A user friendly name for the category */
  name?: Maybe<Scalars['String']>;
  /** The absolute URL for the category description document clients should use */
  readmeUrl?: Maybe<Scalars['String']>;
  /** A URL friendly name for the category */
  slug?: Maybe<Scalars['String']>;
  /** A list of every subcategory for this category */
  subcategories?: Maybe<Array<Maybe<Subcategory>>>;
};

export type Document = {
  __typename?: 'Document';
  /** A list of every contributor */
  authors?: Maybe<Array<Maybe<Author>>>;
  /** The category of this document */
  category?: Maybe<Category>;
  /** The contents of this document in markdown */
  content?: Maybe<Scalars['String']>;
  /** Unix timestamp on when the document was created */
  createdAt?: Maybe<Scalars['String']>;
  /** A unique document ID */
  id?: Maybe<Scalars['ID']>;
  /** A list of every marker attached to this document */
  markers?: Maybe<Array<Maybe<Marker>>>;
  /** A URL friendly document name */
  slug?: Maybe<Scalars['String']>;
  /** The subcategory of this document */
  subcategory?: Maybe<Subcategory>;
  /**
   * A list of every tag attached to the document
   * @deprecated Unused variable
   */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The user friendly title of the document */
  title?: Maybe<Scalars['String']>;
  /** Unix timestamp on when the document was last updated */
  updatedAt?: Maybe<Scalars['String']>;
};

export type Marker = {
  __typename?: 'Marker';
  /** The display name clients should use when displaying this marker */
  displayName?: Maybe<Scalars['String']>;
  /** Unique and URL friendly marker ID */
  id?: Maybe<Scalars['ID']>;
};

export type GetNavMenuItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNavMenuItemsQuery = (
  { __typename?: 'Query' }
  & { getMenuItems?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'name' | 'id' | 'iconUrl' | 'slug'>
  )>>> }
);

export type GetSidebarCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSidebarCategoriesQuery = (
  { __typename?: 'Query' }
  & { getMenuItems?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'slug'>
    & { subcategories?: Maybe<Array<Maybe<(
      { __typename?: 'Subcategory' }
      & Pick<Subcategory, 'name' | 'id' | 'slug'>
    )>>> }
  )>>> }
);


export const GetNavMenuItemsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNavMenuItems"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMenuItems"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetNavMenuItemsQuery__
 *
 * To run a query within a React component, call `useGetNavMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNavMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNavMenuItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNavMenuItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetNavMenuItemsQuery, GetNavMenuItemsQueryVariables>) {
        return Apollo.useQuery<GetNavMenuItemsQuery, GetNavMenuItemsQueryVariables>(GetNavMenuItemsDocument, baseOptions);
      }
export function useGetNavMenuItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNavMenuItemsQuery, GetNavMenuItemsQueryVariables>) {
          return Apollo.useLazyQuery<GetNavMenuItemsQuery, GetNavMenuItemsQueryVariables>(GetNavMenuItemsDocument, baseOptions);
        }
export type GetNavMenuItemsQueryHookResult = ReturnType<typeof useGetNavMenuItemsQuery>;
export type GetNavMenuItemsLazyQueryHookResult = ReturnType<typeof useGetNavMenuItemsLazyQuery>;
export type GetNavMenuItemsQueryResult = Apollo.QueryResult<GetNavMenuItemsQuery, GetNavMenuItemsQueryVariables>;
export const GetSidebarCategoriesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSidebarCategories"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMenuItems"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"subcategories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useGetSidebarCategoriesQuery__
 *
 * To run a query within a React component, call `useGetSidebarCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSidebarCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSidebarCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSidebarCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetSidebarCategoriesQuery, GetSidebarCategoriesQueryVariables>) {
        return Apollo.useQuery<GetSidebarCategoriesQuery, GetSidebarCategoriesQueryVariables>(GetSidebarCategoriesDocument, baseOptions);
      }
export function useGetSidebarCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSidebarCategoriesQuery, GetSidebarCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<GetSidebarCategoriesQuery, GetSidebarCategoriesQueryVariables>(GetSidebarCategoriesDocument, baseOptions);
        }
export type GetSidebarCategoriesQueryHookResult = ReturnType<typeof useGetSidebarCategoriesQuery>;
export type GetSidebarCategoriesLazyQueryHookResult = ReturnType<typeof useGetSidebarCategoriesLazyQuery>;
export type GetSidebarCategoriesQueryResult = Apollo.QueryResult<GetSidebarCategoriesQuery, GetSidebarCategoriesQueryVariables>;