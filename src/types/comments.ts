interface IComments {
  id: string;
  parentId: string;
  content: {
    text: string;
    user: string;
  };
  children: IComments[];
}

export default IComments;
