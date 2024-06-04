import { create } from 'zustand';

export const useBoardStore = create((set) => ({
  boards: [
    {
      _id: '1',
      title: '게시물 제목',
      contents: '게시물 본문',
      categories: ['카테고리1', '카테고리2'],
      files: [],
      comments: [],
    },
    {
      _id: '3ab43799-0bc9-4ad6-aa6f-02f81740a110',
      categories: [],
      contents: 'Testsetset',
      files: [],
      title: 'Test',
      comments: [],
    },
    {
      _id: '24f97bdd-057c-4687-87ea-7abe98457fe7',
      categories: ['Asdg', 'Asdgasdg', 'Asdgasdgadgs'],
      contents:
        'AsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdgAsdgasdgasdg',
      files: [
        'file:///Users/ieonsang/Library/Developer/CoreSimulator/Devices/66E05366-9F09-4770-B810-C67510006E8F/data/Containers/Data/Application/C1D0A5C6-D023-4605-A6D2-D59B935D095F/tmp/491FF7EF-34F3-4B28-8321-40A0E827B9E7.jpg',
      ],
      title: 'Dfsdf',
      comments: [],
    },
  ],
  addBoard: (board) => set((state) => ({ boards: [...state.boards, board] })),
  removeBoard: (_id) =>
    set((state) => ({ boards: state.boards.filter((b) => b._id !== _id) })),

  updateBoard: (_id, _board) =>
    set((state) => ({
      boards: state.boards.map((board) => {
        if (board._id === _id) {
          return _board;
        } else {
          return board;
        }
      }),
    })),

  addComment: (_id, comment) => {
    set((state) => ({
      boards: state.boards.map((item) => {
        if (item._id === _id) {
          return {
            ...item,
            comments: [...item.comments, comment],
          };
        } else {
          return item;
        }
      }),
    }));
  },
}));
