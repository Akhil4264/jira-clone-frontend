import { api } from './api';
import type { AddMember, Member, RemoveMember } from './apiTypes';

export const extendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    members: builder.query<Member[], number>({
      query: (projectId) => ({
        url: `project/${projectId}/members`,
        credentials: 'include',
      }),
      providesTags: ['Members'],
    }),
    removeMember: builder.mutation<void, RemoveMember>({
      query: (body) => ({
        url: `member/remove`,
        method: 'DELETE',
        body,
        credentials: 'include',
      }),
      invalidatesTags: ['Members'],
    }),
    addMember: builder.mutation<void, AddMember>({
      query: (body) => ({
        url: `member/add`,
        method: 'PUT',
        body,
        credentials: 'include',
      }),
      invalidatesTags: ['Members'],
    }),
  }),
  overrideExisting: false,
});

export const { useMembersQuery, useRemoveMemberMutation, useAddMemberMutation } = extendedApi;

// selectors
export const selectMembers = (projectId: number) =>
  extendedApi.useMembersQuery(projectId, {
    selectFromResult: ({ data }) => ({ members: data }),
  });
