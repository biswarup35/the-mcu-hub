interface IComments {
  id: string;
  parentId: string;
  content: {
    text: string;
    user: string;
  };
  children: IComments[];
}
export interface ICommentsReadOnly {
  readonly id: string;
  readonly parentId: string;
  readonly content: {
    readonly text: string;
    readonly user: string;
  };
  readonly children: IComments[];
}

export default IComments;
