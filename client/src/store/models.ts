export interface IPayloadWithHistory {
  body: IPayload;
  extensionUrl?: string;
  workspaceId?: string;
  push: {
    (path: string, state?: unknown): void,
    (location: string): void,
  };
}

export interface IPayload {
  [key: string]: any;
}

export interface IAction {
  type: string;
  payload?: any;
}
