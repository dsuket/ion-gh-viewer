// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  /*
    description: The query root of GitHub's GraphQL interface.
  */
  interface IQuery {
    __typename: string;
    codeOfConduct: ICodeOfConduct | null;
    codesOfConduct: Array<ICodeOfConduct> | null;
    node: Node | null;
    nodes: Array<Node>;
    organization: IOrganization | null;
    rateLimit: IRateLimit | null;
    relay: IQuery;
    repository: IRepository | null;
    repositoryOwner: RepositoryOwner | null;
    resource: UniformResourceLocatable | null;
    search: ISearchResultItemConnection;
    topic: ITopic | null;
    user: IUser | null;
    viewer: IUser;
  }

  /*
    description: The Code of Conduct for a repository
  */
  interface ICodeOfConduct {
    __typename: string;
    body: string | null;
    key: string;
    name: string;
    url: any | null;
  }

  /*
    description: An object with an ID.
  */
  type Node = IOrganization | IProject | IProjectColumn | IProjectCard | IIssue | IUser | IRepository | ICommitComment | IReaction | ICommit | IStatus | IStatusContext | ITree | IRef | IPullRequest | ILabel | IIssueComment | IPullRequestCommit | IReviewRequest | IPullRequestReview | IPullRequestReviewComment | ICommitCommentThread | IPullRequestReviewThread | IClosedEvent | IReopenedEvent | ISubscribedEvent | IUnsubscribedEvent | IMergedEvent | IReferencedEvent | IAssignedEvent | IUnassignedEvent | ILabeledEvent | IUnlabeledEvent | IMilestonedEvent | IDemilestonedEvent | IRenamedTitleEvent | ILockedEvent | IUnlockedEvent | IDeployedEvent | IDeployment | IDeploymentStatus | IHeadRefDeletedEvent | IHeadRefRestoredEvent | IHeadRefForcePushedEvent | IBaseRefForcePushedEvent | IReviewRequestedEvent | IReviewRequestRemovedEvent | IReviewDismissedEvent | ILanguage | IMilestone | IProtectedBranch | IPushAllowance | ITeam | IReviewDismissalAllowance | IRelease | IReleaseAsset | IRepositoryTopic | ITopic | IGist | IGistComment | IOrganizationIdentityProvider | IExternalIdentity | IBlob | IBot | IRepositoryInvitation | ITag | IAddedToProjectEvent | IBaseRefChangedEvent | ICommentDeletedEvent | IConvertedNoteToIssueEvent | IMentionedEvent | IMovedColumnsInProjectEvent | IRemovedFromProjectEvent;

  /*
    description: An object with an ID.
  */
  interface INode {
    __typename: string;
    id: string;
  }

  /*
    description: An account on GitHub, with one or more owners, that has repositories, members and teams.
  */
  interface IOrganization {
    __typename: string;
    avatarUrl: any;
    databaseId: number | null;
    id: string;
    isInvoiced: boolean;
    login: string;
    members: IUserConnection;
    name: string;
    newTeamResourcePath: any;
    newTeamUrl: any;
    organizationBillingEmail: string | null;
    pinnedRepositories: IRepositoryConnection;
    project: IProject | null;
    projects: IProjectConnection;
    projectsResourcePath: any;
    projectsUrl: any;
    repositories: IRepositoryConnection;
    repository: IRepository | null;
    resourcePath: any;
    samlIdentityProvider: IOrganizationIdentityProvider | null;
    team: ITeam | null;
    teams: ITeamConnection;
    teamsResourcePath: any;
    teamsUrl: any;
    url: any;
    viewerCanAdminister: boolean;
    viewerCanCreateProjects: boolean;
    viewerCanCreateRepositories: boolean;
    viewerCanCreateTeams: boolean;
    viewerIsAMember: boolean;
  }

  /*
    description: Represents an object which can take actions on GitHub. Typically a User or Bot.
  */
  type Actor = IOrganization | IUser | IBot;

  /*
    description: Represents an object which can take actions on GitHub. Typically a User or Bot.
  */
  interface IActor {
    __typename: string;
    avatarUrl: any;
    login: string;
    resourcePath: any;
    url: any;
  }

  /*
    description: Represents an owner of a Project.
  */
  type ProjectOwner = IOrganization | IRepository;

  /*
    description: Represents an owner of a Project.
  */
  interface IProjectOwner {
    __typename: string;
    id: string;
    project: IProject | null;
    projects: IProjectConnection;
    projectsResourcePath: any;
    projectsUrl: any;
    viewerCanCreateProjects: boolean;
  }

  /*
    description: Projects manage issues, pull requests and notes within a project owner.
  */
  interface IProject {
    __typename: string;
    body: string | null;
    bodyHTML: any;
    closedAt: any | null;
    columns: IProjectColumnConnection;
    createdAt: any;
    creator: Actor | null;
    databaseId: number | null;
    id: string;
    name: string;
    number: number;
    owner: ProjectOwner;
    resourcePath: any;
    state: IProjectStateEnum;
    updatedAt: any;
    url: any;
    viewerCanUpdate: boolean;
  }

  /*
    description: Entities that can be updated.
  */
  type Updatable = IProject | IIssue | ICommitComment | IPullRequest | IIssueComment | IPullRequestReview | IPullRequestReviewComment | IGistComment;

  /*
    description: Entities that can be updated.
  */
  interface IUpdatable {
    __typename: string;
    viewerCanUpdate: boolean;
  }

  /*
    description: The connection type for ProjectColumn.
  */
  interface IProjectColumnConnection {
    __typename: string;
    edges: Array<IProjectColumnEdge> | null;
    nodes: Array<IProjectColumn> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IProjectColumnEdge {
    __typename: string;
    cursor: string;
    node: IProjectColumn | null;
  }

  /*
    description: A column inside a project.
  */
  interface IProjectColumn {
    __typename: string;
    cards: IProjectCardConnection;
    createdAt: any;
    databaseId: number | null;
    id: string;
    name: string;
    project: IProject;
    updatedAt: any;
  }

  /*
    description: The connection type for ProjectCard.
  */
  interface IProjectCardConnection {
    __typename: string;
    edges: Array<IProjectCardEdge> | null;
    nodes: Array<IProjectCard> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IProjectCardEdge {
    __typename: string;
    cursor: string;
    node: IProjectCard | null;
  }

  /*
    description: A card in a project.
  */
  interface IProjectCard {
    __typename: string;
    column: IProjectColumn | null;
    content: ProjectCardItem | null;
    createdAt: any;
    creator: Actor | null;
    databaseId: number | null;
    id: string;
    note: string | null;
    project: IProject;
    projectColumn: IProjectColumn;
    resourcePath: any;
    state: IProjectCardStateEnum | null;
    updatedAt: any;
    url: any;
  }

  /*
    description: Types that can be inside Project Cards.
  */
  type ProjectCardItem = IIssue | IPullRequest;



  /*
    description: An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project.
  */
  interface IIssue {
    __typename: string;
    assignees: IUserConnection;
    author: Actor | null;
    authorAssociation: ICommentAuthorAssociationEnum;
    body: string;
    bodyHTML: any;
    bodyText: string;
    closed: boolean;
    comments: IIssueCommentConnection;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number | null;
    editor: Actor | null;
    id: string;
    labels: ILabelConnection | null;
    lastEditedAt: any | null;
    locked: boolean;
    milestone: IMilestone | null;
    number: number;
    participants: IUserConnection;
    publishedAt: any | null;
    reactionGroups: Array<IReactionGroup>;
    reactions: IReactionConnection;
    repository: IRepository;
    resourcePath: any;
    state: IIssueStateEnum;
    timeline: IIssueTimelineConnection;
    title: string;
    updatedAt: any;
    url: any;
    viewerCanReact: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: Array<ICommentCannotUpdateReasonEnum>;
    viewerDidAuthor: boolean;
    viewerSubscription: ISubscriptionStateEnum;
  }

  /*
    description: An object that can have users assigned to it.
  */
  type Assignable = IIssue | IPullRequest;

  /*
    description: An object that can have users assigned to it.
  */
  interface IAssignable {
    __typename: string;
    assignees: IUserConnection;
  }

  /*
    description: The connection type for User.
  */
  interface IUserConnection {
    __typename: string;
    edges: Array<IUserEdge> | null;
    nodes: Array<IUser> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IUserEdge {
    __typename: string;
    cursor: string;
    node: IUser | null;
  }

  /*
    description: A user is an individual's account on GitHub that owns repositories and can make new content.
  */
  interface IUser {
    __typename: string;
    avatarUrl: any;
    bio: string | null;
    bioHTML: any;
    company: string | null;
    companyHTML: any;
    contributedRepositories: IRepositoryConnection;
    createdAt: any;
    databaseId: number | null;
    email: string;
    followers: IFollowerConnection;
    following: IFollowingConnection;
    gist: IGist | null;
    gists: IGistConnection;
    id: string;
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isDeveloperProgramMember: boolean;
    isEmployee: boolean;
    isHireable: boolean;
    isInvoiced: boolean;
    isSiteAdmin: boolean;
    isViewer: boolean;
    issues: IIssueConnection;
    location: string | null;
    login: string;
    name: string | null;
    organization: IOrganization | null;
    organizations: IOrganizationConnection;
    pinnedRepositories: IRepositoryConnection;
    pullRequests: IPullRequestConnection;
    repositories: IRepositoryConnection;
    repository: IRepository | null;
    resourcePath: any;
    starredRepositories: IStarredRepositoryConnection;
    updatedAt: any;
    url: any;
    viewerCanFollow: boolean;
    viewerIsFollowing: boolean;
    watching: IRepositoryConnection;
    websiteUrl: any | null;
  }

  /*
    description: Represents an owner of a Repository.
  */
  type RepositoryOwner = IOrganization | IUser;

  /*
    description: Represents an owner of a Repository.
  */
  interface IRepositoryOwner {
    __typename: string;
    avatarUrl: any;
    id: string;
    login: string;
    pinnedRepositories: IRepositoryConnection;
    repositories: IRepositoryConnection;
    repository: IRepository | null;
    resourcePath: any;
    url: any;
  }

  /*
    description: The privacy of a repository
  */
  type IRepositoryPrivacyEnum = 'PUBLIC' | 'PRIVATE';

  /*
    description: Ordering options for repository connections
  */
  interface IRepositoryOrder {
    field: IRepositoryOrderFieldEnum;
    direction: IOrderDirectionEnum;
  }

  /*
    description: Properties by which repository connections can be ordered.
  */
  type IRepositoryOrderFieldEnum = 'CREATED_AT' | 'UPDATED_AT' | 'PUSHED_AT' | 'NAME' | 'STARGAZERS';

  /*
    description: Possible directions in which to order a list of items when provided an `orderBy` argument.
  */
  type IOrderDirectionEnum = 'ASC' | 'DESC';

  /*
    description: The affiliation of a user to a repository
  */
  type IRepositoryAffiliationEnum = 'OWNER' | 'COLLABORATOR' | 'ORGANIZATION_MEMBER';

  /*
    description: A list of repositories owned by the subject.
  */
  interface IRepositoryConnection {
    __typename: string;
    edges: Array<IRepositoryEdge> | null;
    nodes: Array<IRepository> | null;
    pageInfo: IPageInfo;
    totalCount: number;
    totalDiskUsage: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IRepositoryEdge {
    __typename: string;
    cursor: string;
    node: IRepository | null;
  }

  /*
    description: A repository contains the content for a project.
  */
  interface IRepository {
    __typename: string;
    codeOfConduct: ICodeOfConduct | null;
    commitComments: ICommitCommentConnection;
    createdAt: any;
    databaseId: number | null;
    defaultBranchRef: IRef | null;
    deployments: IDeploymentConnection;
    description: string | null;
    descriptionHTML: any;
    diskUsage: number | null;
    forks: IRepositoryConnection;
    hasIssuesEnabled: boolean;
    hasWikiEnabled: boolean;
    homepageUrl: any | null;
    id: string;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    issue: IIssue | null;
    issueOrPullRequest: IssueOrPullRequest | null;
    issues: IIssueConnection;
    label: ILabel | null;
    labels: ILabelConnection | null;
    languages: ILanguageConnection | null;
    license: string | null;
    lockReason: IRepositoryLockReasonEnum | null;
    mentionableUsers: IUserConnection;
    milestone: IMilestone | null;
    milestones: IMilestoneConnection | null;
    mirrorUrl: any | null;
    name: string;
    nameWithOwner: string;
    object: GitObject | null;
    owner: RepositoryOwner;
    parent: IRepository | null;
    primaryLanguage: ILanguage | null;
    project: IProject | null;
    projects: IProjectConnection;
    projectsResourcePath: any;
    projectsUrl: any;
    protectedBranches: IProtectedBranchConnection;
    pullRequest: IPullRequest | null;
    pullRequests: IPullRequestConnection;
    pushedAt: any | null;
    ref: IRef | null;
    refs: IRefConnection | null;
    releases: IReleaseConnection;
    repositoryTopics: IRepositoryTopicConnection;
    resourcePath: any;
    stargazers: IStargazerConnection;
    updatedAt: any;
    url: any;
    viewerCanAdminister: boolean;
    viewerCanCreateProjects: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdateTopics: boolean;
    viewerHasStarred: boolean;
    viewerSubscription: ISubscriptionStateEnum;
    watchers: IUserConnection;
  }

  /*
    description: Entities that can be subscribed to for web and email notifications.
  */
  type Subscribable = IIssue | IRepository | ICommit | IPullRequest;

  /*
    description: Entities that can be subscribed to for web and email notifications.
  */
  interface ISubscribable {
    __typename: string;
    viewerCanSubscribe: boolean;
    viewerSubscription: ISubscriptionStateEnum;
  }

  /*
    description: The possible states of a subscription.
  */
  type ISubscriptionStateEnum = 'UNSUBSCRIBED' | 'SUBSCRIBED' | 'IGNORED';

  /*
    description: Things that can be starred.
  */
  type Starrable = IRepository | IGist;

  /*
    description: Things that can be starred.
  */
  interface IStarrable {
    __typename: string;
    id: string;
    stargazers: IStargazerConnection;
    viewerHasStarred: boolean;
  }

  /*
    description: Ways in which star connections can be ordered.
  */
  interface IStarOrder {
    field: IStarOrderFieldEnum;
    direction: IOrderDirectionEnum;
  }

  /*
    description: Properties by which star connections can be ordered.
  */
  type IStarOrderFieldEnum = 'STARRED_AT';

  /*
    description: The connection type for User.
  */
  interface IStargazerConnection {
    __typename: string;
    edges: Array<IStargazerEdge> | null;
    nodes: Array<IUser> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: Represents a user that's starred a repository.
  */
  interface IStargazerEdge {
    __typename: string;
    cursor: string;
    node: IUser;
    starredAt: any;
  }

  /*
    description: Information about pagination in a connection.
  */
  interface IPageInfo {
    __typename: string;
    endCursor: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
  }

  /*
    description: Represents a type that can be retrieved by a URL.
  */
  type UniformResourceLocatable = IOrganization | IIssue | IUser | IRepository | IPullRequest | IPullRequestCommit | IMergedEvent | IReviewDismissedEvent | IMilestone | IRelease | IRepositoryTopic | IBot;

  /*
    description: Represents a type that can be retrieved by a URL.
  */
  interface IUniformResourceLocatable {
    __typename: string;
    resourcePath: any;
    url: any;
  }

  /*
    description: A subset of repository info.
  */
  type RepositoryInfo = IRepository | IRepositoryInvitationRepository;

  /*
    description: A subset of repository info.
  */
  interface IRepositoryInfo {
    __typename: string;
    createdAt: any;
    description: string | null;
    descriptionHTML: any;
    hasIssuesEnabled: boolean;
    hasWikiEnabled: boolean;
    homepageUrl: any | null;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    license: string | null;
    lockReason: IRepositoryLockReasonEnum | null;
    mirrorUrl: any | null;
    name: string;
    nameWithOwner: string;
    owner: RepositoryOwner;
    pushedAt: any | null;
    resourcePath: any;
    updatedAt: any;
    url: any;
  }

  /*
    description: The possible reasons a given repository could be in a locked state.
  */
  type IRepositoryLockReasonEnum = 'MOVING' | 'BILLING' | 'RENAME' | 'MIGRATING';

  /*
    description: The connection type for CommitComment.
  */
  interface ICommitCommentConnection {
    __typename: string;
    edges: Array<ICommitCommentEdge> | null;
    nodes: Array<ICommitComment> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface ICommitCommentEdge {
    __typename: string;
    cursor: string;
    node: ICommitComment | null;
  }

  /*
    description: Represents a comment on a given Commit.
  */
  interface ICommitComment {
    __typename: string;
    author: Actor | null;
    authorAssociation: ICommentAuthorAssociationEnum;
    body: string;
    bodyHTML: any;
    commit: ICommit;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number | null;
    editor: Actor | null;
    id: string;
    lastEditedAt: any | null;
    path: string | null;
    position: number | null;
    publishedAt: any | null;
    reactionGroups: Array<IReactionGroup>;
    reactions: IReactionConnection;
    repository: IRepository;
    updatedAt: any;
    viewerCanDelete: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: Array<ICommentCannotUpdateReasonEnum>;
    viewerDidAuthor: boolean;
  }

  /*
    description: Represents a comment.
  */
  type Comment = IIssue | ICommitComment | IPullRequest | IIssueComment | IPullRequestReview | IPullRequestReviewComment | IGistComment;

  /*
    description: Represents a comment.
  */
  interface IComment {
    __typename: string;
    author: Actor | null;
    authorAssociation: ICommentAuthorAssociationEnum;
    body: string;
    bodyHTML: any;
    createdAt: any;
    createdViaEmail: boolean;
    editor: Actor | null;
    id: string;
    lastEditedAt: any | null;
    publishedAt: any | null;
    updatedAt: any;
    viewerDidAuthor: boolean;
  }

  /*
    description: A comment author association with repository.
  */
  type ICommentAuthorAssociationEnum = 'MEMBER' | 'OWNER' | 'COLLABORATOR' | 'CONTRIBUTOR' | 'FIRST_TIME_CONTRIBUTOR' | 'NONE';

  /*
    description: Entities that can be deleted.
  */
  type Deletable = ICommitComment | IIssueComment | IPullRequestReview | IPullRequestReviewComment | IGistComment;

  /*
    description: Entities that can be deleted.
  */
  interface IDeletable {
    __typename: string;
    viewerCanDelete: boolean;
  }

  /*
    description: Comments that can be updated.
  */
  type UpdatableComment = IIssue | ICommitComment | IPullRequest | IIssueComment | IPullRequestReview | IPullRequestReviewComment | IGistComment;

  /*
    description: Comments that can be updated.
  */
  interface IUpdatableComment {
    __typename: string;
    viewerCannotUpdateReasons: Array<ICommentCannotUpdateReasonEnum>;
  }

  /*
    description: The possible errors that will prevent a user from updating a comment.
  */
  type ICommentCannotUpdateReasonEnum = 'INSUFFICIENT_ACCESS' | 'LOCKED' | 'LOGIN_REQUIRED' | 'MAINTENANCE' | 'VERIFIED_EMAIL_REQUIRED';

  /*
    description: Represents a subject that can be reacted on.
  */
  type Reactable = IIssue | ICommitComment | IPullRequest | IIssueComment | IPullRequestReviewComment;

  /*
    description: Represents a subject that can be reacted on.
  */
  interface IReactable {
    __typename: string;
    databaseId: number | null;
    id: string;
    reactionGroups: Array<IReactionGroup>;
    reactions: IReactionConnection;
    viewerCanReact: boolean;
  }

  /*
    description: A group of emoji reactions to a particular piece of content.
  */
  interface IReactionGroup {
    __typename: string;
    content: IReactionContentEnum;
    createdAt: any | null;
    subject: Reactable;
    users: IReactingUserConnection;
    viewerHasReacted: boolean;
  }

  /*
    description: Emojis that can be attached to Issues, Pull Requests and Comments.
  */
  type IReactionContentEnum = 'THUMBS_UP' | 'THUMBS_DOWN' | 'LAUGH' | 'HOORAY' | 'CONFUSED' | 'HEART';

  /*
    description: The connection type for User.
  */
  interface IReactingUserConnection {
    __typename: string;
    edges: Array<IReactingUserEdge> | null;
    nodes: Array<IUser> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: Represents a user that's made a reaction.
  */
  interface IReactingUserEdge {
    __typename: string;
    cursor: string;
    node: IUser;
    reactedAt: any;
  }

  /*
    description: Ways in which lists of reactions can be ordered upon return.
  */
  interface IReactionOrder {
    field: IReactionOrderFieldEnum;
    direction: IOrderDirectionEnum;
  }

  /*
    description: A list of fields that reactions can be ordered by.
  */
  type IReactionOrderFieldEnum = 'CREATED_AT';

  /*
    description: A list of reactions that have been left on the subject.
  */
  interface IReactionConnection {
    __typename: string;
    edges: Array<IReactionEdge> | null;
    nodes: Array<IReaction> | null;
    pageInfo: IPageInfo;
    totalCount: number;
    viewerHasReacted: boolean;
  }

  /*
    description: An edge in a connection.
  */
  interface IReactionEdge {
    __typename: string;
    cursor: string;
    node: IReaction | null;
  }

  /*
    description: An emoji reaction to a particular piece of content.
  */
  interface IReaction {
    __typename: string;
    content: IReactionContentEnum;
    createdAt: any;
    databaseId: number | null;
    id: string;
    user: IUser | null;
  }

  /*
    description: Represents a object that belongs to a repository.
  */
  type RepositoryNode = IIssue | ICommitComment | IPullRequest | IIssueComment | IPullRequestReview | IPullRequestReviewComment | ICommitCommentThread;

  /*
    description: Represents a object that belongs to a repository.
  */
  interface IRepositoryNode {
    __typename: string;
    repository: IRepository;
  }

  /*
    description: Represents a Git commit.
  */
  interface ICommit {
    __typename: string;
    abbreviatedOid: string;
    author: IGitActor | null;
    authoredByCommitter: boolean;
    blame: IBlame;
    comments: ICommitCommentConnection;
    commitResourcePath: any;
    commitUrl: any;
    committedDate: any;
    committedViaWeb: boolean;
    committer: IGitActor | null;
    history: ICommitHistoryConnection;
    id: string;
    message: string;
    messageBody: string;
    messageBodyHTML: any;
    messageHeadline: string;
    messageHeadlineHTML: any;
    oid: any;
    repository: IRepository;
    resourcePath: any;
    signature: GitSignature | null;
    status: IStatus | null;
    tree: ITree;
    treeResourcePath: any;
    treeUrl: any;
    url: any;
    viewerCanSubscribe: boolean;
    viewerSubscription: ISubscriptionStateEnum;
  }

  /*
    description: Represents a Git object.
  */
  type GitObject = ICommit | ITree | IBlob | ITag;

  /*
    description: Represents a Git object.
  */
  interface IGitObject {
    __typename: string;
    abbreviatedOid: string;
    commitResourcePath: any;
    commitUrl: any;
    id: string;
    oid: any;
    repository: IRepository;
  }

  /*
    description: Represents an actor in a Git commit (ie. an author or committer).
  */
  interface IGitActor {
    __typename: string;
    avatarUrl: any;
    date: any | null;
    email: string | null;
    name: string | null;
    user: IUser | null;
  }

  /*
    description: Represents a Git blame.
  */
  interface IBlame {
    __typename: string;
    ranges: Array<IBlameRange>;
  }

  /*
    description: Represents a range of information from a Git blame.
  */
  interface IBlameRange {
    __typename: string;
    age: number;
    commit: ICommit;
    endingLine: number;
    startingLine: number;
  }

  /*
    description: Specifies an author for filtering Git commits.
  */
  interface ICommitAuthor {
    id?: string | null;
    emails: Array<string>;
  }

  /*
    description: The connection type for Commit.
  */
  interface ICommitHistoryConnection {
    __typename: string;
    edges: Array<ICommitEdge> | null;
    nodes: Array<ICommit> | null;
    pageInfo: IPageInfo;
  }

  /*
    description: An edge in a connection.
  */
  interface ICommitEdge {
    __typename: string;
    cursor: string;
    node: ICommit | null;
  }

  /*
    description: Information about a signature (GPG or S/MIME) on a Commit or Tag.
  */
  type GitSignature = IGpgSignature | ISmimeSignature | IUnknownSignature;

  /*
    description: Information about a signature (GPG or S/MIME) on a Commit or Tag.
  */
  interface IGitSignature {
    __typename: string;
    email: string;
    isValid: boolean;
    payload: string;
    signature: string;
    signer: IUser | null;
    state: IGitSignatureStateEnum;
  }

  /*
    description: The state of a Git signature.
  */
  type IGitSignatureStateEnum = 'VALID' | 'INVALID' | 'MALFORMED_SIG' | 'UNKNOWN_KEY' | 'BAD_EMAIL' | 'UNVERIFIED_EMAIL' | 'NO_USER' | 'UNKNOWN_SIG_TYPE' | 'UNSIGNED' | 'GPGVERIFY_UNAVAILABLE' | 'GPGVERIFY_ERROR' | 'NOT_SIGNING_KEY' | 'EXPIRED_KEY';

  /*
    description: Represents a commit status.
  */
  interface IStatus {
    __typename: string;
    commit: ICommit | null;
    context: IStatusContext | null;
    contexts: Array<IStatusContext>;
    id: string;
    state: IStatusStateEnum;
  }

  /*
    description: Represents an individual commit status context
  */
  interface IStatusContext {
    __typename: string;
    commit: ICommit | null;
    context: string;
    createdAt: any;
    creator: Actor | null;
    description: string | null;
    id: string;
    state: IStatusStateEnum;
    targetUrl: any | null;
  }

  /*
    description: The possible commit status states.
  */
  type IStatusStateEnum = 'EXPECTED' | 'ERROR' | 'FAILURE' | 'PENDING' | 'SUCCESS';

  /*
    description: Represents a Git tree.
  */
  interface ITree {
    __typename: string;
    abbreviatedOid: string;
    commitResourcePath: any;
    commitUrl: any;
    entries: Array<ITreeEntry>;
    id: string;
    oid: any;
    repository: IRepository;
  }

  /*
    description: Represents a Git tree entry.
  */
  interface ITreeEntry {
    __typename: string;
    mode: number;
    name: string;
    object: GitObject | null;
    oid: any;
    repository: IRepository;
    type: string;
  }

  /*
    description: Represents a Git reference.
  */
  interface IRef {
    __typename: string;
    associatedPullRequests: IPullRequestConnection;
    id: string;
    name: string;
    prefix: string;
    repository: IRepository;
    target: GitObject;
  }

  /*
    description: The possible states of a pull request.
  */
  type IPullRequestStateEnum = 'OPEN' | 'CLOSED' | 'MERGED';

  /*
    description: Ways in which lists of issues can be ordered upon return.
  */
  interface IIssueOrder {
    field: IIssueOrderFieldEnum;
    direction: IOrderDirectionEnum;
  }

  /*
    description: Properties by which issue connections can be ordered.
  */
  type IIssueOrderFieldEnum = 'CREATED_AT' | 'UPDATED_AT' | 'COMMENTS';

  /*
    description: The connection type for PullRequest.
  */
  interface IPullRequestConnection {
    __typename: string;
    edges: Array<IPullRequestEdge> | null;
    nodes: Array<IPullRequest> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IPullRequestEdge {
    __typename: string;
    cursor: string;
    node: IPullRequest | null;
  }

  /*
    description: A repository pull request.
  */
  interface IPullRequest {
    __typename: string;
    assignees: IUserConnection;
    author: Actor | null;
    authorAssociation: ICommentAuthorAssociationEnum;
    baseRef: IRef | null;
    baseRefName: string;
    body: string;
    bodyHTML: any;
    bodyText: string;
    closed: boolean;
    comments: IIssueCommentConnection;
    commits: IPullRequestCommitConnection;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number | null;
    editor: Actor | null;
    headRef: IRef | null;
    headRefName: string;
    headRepository: IRepository | null;
    headRepositoryOwner: RepositoryOwner | null;
    id: string;
    isCrossRepository: boolean;
    labels: ILabelConnection | null;
    lastEditedAt: any | null;
    locked: boolean;
    mergeCommit: ICommit | null;
    mergeable: IMergeableStateEnum;
    merged: boolean;
    mergedAt: any | null;
    number: number;
    participants: IUserConnection;
    potentialMergeCommit: ICommit | null;
    publishedAt: any | null;
    reactionGroups: Array<IReactionGroup>;
    reactions: IReactionConnection;
    repository: IRepository;
    resourcePath: any;
    revertResourcePath: any;
    revertUrl: any;
    reviewRequests: IReviewRequestConnection | null;
    reviews: IPullRequestReviewConnection | null;
    state: IPullRequestStateEnum;
    suggestedReviewers: Array<ISuggestedReviewer>;
    timeline: IPullRequestTimelineConnection;
    title: string;
    updatedAt: any;
    url: any;
    viewerCanReact: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: Array<ICommentCannotUpdateReasonEnum>;
    viewerDidAuthor: boolean;
    viewerSubscription: ISubscriptionStateEnum;
  }

  /*
    description: An object that can be closed
  */
  type Closable = IIssue | IPullRequest;

  /*
    description: An object that can be closed
  */
  interface IClosable {
    __typename: string;
    closed: boolean;
  }

  /*
    description: An object that can have labels assigned to it.
  */
  type Labelable = IIssue | IPullRequest;

  /*
    description: An object that can have labels assigned to it.
  */
  interface ILabelable {
    __typename: string;
    labels: ILabelConnection | null;
  }

  /*
    description: The connection type for Label.
  */
  interface ILabelConnection {
    __typename: string;
    edges: Array<ILabelEdge> | null;
    nodes: Array<ILabel> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface ILabelEdge {
    __typename: string;
    cursor: string;
    node: ILabel | null;
  }

  /*
    description: A label for categorizing Issues or Milestones with a given Repository.
  */
  interface ILabel {
    __typename: string;
    color: string;
    id: string;
    issues: IIssueConnection;
    name: string;
    pullRequests: IPullRequestConnection;
    repository: IRepository;
  }

  /*
    description: The possible states of an issue.
  */
  type IIssueStateEnum = 'OPEN' | 'CLOSED';

  /*
    description: The connection type for Issue.
  */
  interface IIssueConnection {
    __typename: string;
    edges: Array<IIssueEdge> | null;
    nodes: Array<IIssue> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IIssueEdge {
    __typename: string;
    cursor: string;
    node: IIssue | null;
  }

  /*
    description: An object that can be locked.
  */
  type Lockable = IIssue | IPullRequest;

  /*
    description: An object that can be locked.
  */
  interface ILockable {
    __typename: string;
    locked: boolean;
  }

  /*
    description: The connection type for IssueComment.
  */
  interface IIssueCommentConnection {
    __typename: string;
    edges: Array<IIssueCommentEdge> | null;
    nodes: Array<IIssueComment> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IIssueCommentEdge {
    __typename: string;
    cursor: string;
    node: IIssueComment | null;
  }

  /*
    description: Represents a comment on an Issue.
  */
  interface IIssueComment {
    __typename: string;
    author: Actor | null;
    authorAssociation: ICommentAuthorAssociationEnum;
    body: string;
    bodyHTML: any;
    bodyText: string;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number | null;
    editor: Actor | null;
    id: string;
    issue: IIssue;
    lastEditedAt: any | null;
    publishedAt: any | null;
    reactionGroups: Array<IReactionGroup>;
    reactions: IReactionConnection;
    repository: IRepository;
    updatedAt: any;
    viewerCanDelete: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: Array<ICommentCannotUpdateReasonEnum>;
    viewerDidAuthor: boolean;
  }

  /*
    description: The connection type for PullRequestCommit.
  */
  interface IPullRequestCommitConnection {
    __typename: string;
    edges: Array<IPullRequestCommitEdge> | null;
    nodes: Array<IPullRequestCommit> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IPullRequestCommitEdge {
    __typename: string;
    cursor: string;
    node: IPullRequestCommit | null;
  }

  /*
    description: Represents a Git commit part of a pull request.
  */
  interface IPullRequestCommit {
    __typename: string;
    commit: ICommit;
    id: string;
    pullRequest: IPullRequest;
    resourcePath: any;
    url: any;
  }

  /*
    description: Whether or not a PullRequest can be merged.
  */
  type IMergeableStateEnum = 'MERGEABLE' | 'CONFLICTING' | 'UNKNOWN';

  /*
    description: The connection type for ReviewRequest.
  */
  interface IReviewRequestConnection {
    __typename: string;
    edges: Array<IReviewRequestEdge> | null;
    nodes: Array<IReviewRequest> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IReviewRequestEdge {
    __typename: string;
    cursor: string;
    node: IReviewRequest | null;
  }

  /*
    description: A request for a user to review a pull request.
  */
  interface IReviewRequest {
    __typename: string;
    databaseId: number | null;
    id: string;
    pullRequest: IPullRequest;
    reviewer: IUser | null;
  }

  /*
    description: The possible states of a pull request review.
  */
  type IPullRequestReviewStateEnum = 'PENDING' | 'COMMENTED' | 'APPROVED' | 'CHANGES_REQUESTED' | 'DISMISSED';

  /*
    description: The connection type for PullRequestReview.
  */
  interface IPullRequestReviewConnection {
    __typename: string;
    edges: Array<IPullRequestReviewEdge> | null;
    nodes: Array<IPullRequestReview> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IPullRequestReviewEdge {
    __typename: string;
    cursor: string;
    node: IPullRequestReview | null;
  }

  /*
    description: A review object for a given pull request.
  */
  interface IPullRequestReview {
    __typename: string;
    author: Actor | null;
    authorAssociation: ICommentAuthorAssociationEnum;
    body: string;
    bodyHTML: any;
    bodyText: string;
    comments: IPullRequestReviewCommentConnection;
    commit: ICommit | null;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number | null;
    editor: Actor | null;
    id: string;
    lastEditedAt: any | null;
    publishedAt: any | null;
    pullRequest: IPullRequest;
    repository: IRepository;
    resourcePath: any;
    state: IPullRequestReviewStateEnum;
    submittedAt: any | null;
    updatedAt: any;
    url: any;
    viewerCanDelete: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: Array<ICommentCannotUpdateReasonEnum>;
    viewerDidAuthor: boolean;
  }

  /*
    description: The connection type for PullRequestReviewComment.
  */
  interface IPullRequestReviewCommentConnection {
    __typename: string;
    edges: Array<IPullRequestReviewCommentEdge> | null;
    nodes: Array<IPullRequestReviewComment> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IPullRequestReviewCommentEdge {
    __typename: string;
    cursor: string;
    node: IPullRequestReviewComment | null;
  }

  /*
    description: A review comment associated with a given repository pull request.
  */
  interface IPullRequestReviewComment {
    __typename: string;
    author: Actor | null;
    authorAssociation: ICommentAuthorAssociationEnum;
    body: string;
    bodyHTML: any;
    bodyText: string;
    commit: ICommit;
    createdAt: any;
    createdViaEmail: boolean;
    databaseId: number | null;
    diffHunk: string;
    draftedAt: any;
    editor: Actor | null;
    id: string;
    lastEditedAt: any | null;
    originalCommit: ICommit;
    originalPosition: number;
    path: string;
    position: number | null;
    publishedAt: any | null;
    pullRequest: IPullRequest;
    pullRequestReview: IPullRequestReview | null;
    reactionGroups: Array<IReactionGroup>;
    reactions: IReactionConnection;
    repository: IRepository;
    resourcePath: any;
    updatedAt: any;
    url: any;
    viewerCanDelete: boolean;
    viewerCanReact: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: Array<ICommentCannotUpdateReasonEnum>;
    viewerDidAuthor: boolean;
  }

  /*
    description: A suggestion to review a pull request based on a user's commit history and review comments.
  */
  interface ISuggestedReviewer {
    __typename: string;
    isAuthor: boolean;
    isCommenter: boolean;
    reviewer: IUser;
  }

  /*
    description: The connection type for PullRequestTimelineItem.
  */
  interface IPullRequestTimelineConnection {
    __typename: string;
    edges: Array<IPullRequestTimelineItemEdge> | null;
    nodes: Array<PullRequestTimelineItem> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IPullRequestTimelineItemEdge {
    __typename: string;
    cursor: string;
    node: PullRequestTimelineItem | null;
  }

  /*
    description: An item in an pull request timeline
  */
  type PullRequestTimelineItem = ICommit | ICommitCommentThread | IPullRequestReview | IPullRequestReviewThread | IPullRequestReviewComment | IIssueComment | IClosedEvent | IReopenedEvent | ISubscribedEvent | IUnsubscribedEvent | IMergedEvent | IReferencedEvent | IAssignedEvent | IUnassignedEvent | ILabeledEvent | IUnlabeledEvent | IMilestonedEvent | IDemilestonedEvent | IRenamedTitleEvent | ILockedEvent | IUnlockedEvent | IDeployedEvent | IHeadRefDeletedEvent | IHeadRefRestoredEvent | IHeadRefForcePushedEvent | IBaseRefForcePushedEvent | IReviewRequestedEvent | IReviewRequestRemovedEvent | IReviewDismissedEvent;



  /*
    description: A thread of comments on a commit.
  */
  interface ICommitCommentThread {
    __typename: string;
    comments: ICommitCommentConnection;
    commit: ICommit;
    id: string;
    path: string | null;
    position: number | null;
    repository: IRepository;
  }

  /*
    description: A threaded list of comments for a given pull request.
  */
  interface IPullRequestReviewThread {
    __typename: string;
    comments: IPullRequestReviewCommentConnection;
    id: string;
    pullRequest: IPullRequest;
  }

  /*
    description: Represents a 'closed' event on any `Closable`.
  */
  interface IClosedEvent {
    __typename: string;
    actor: Actor | null;
    closable: Closable;
    commit: ICommit | null;
    createdAt: any;
    id: string;
  }

  /*
    description: Represents a 'reopened' event on any `Closable`.
  */
  interface IReopenedEvent {
    __typename: string;
    actor: Actor | null;
    closable: Closable;
    createdAt: any;
    id: string;
  }

  /*
    description: Represents a 'subscribed' event on a given `Subscribable`.
  */
  interface ISubscribedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    subscribable: Subscribable;
  }

  /*
    description: Represents an 'unsubscribed' event on a given `Subscribable`.
  */
  interface IUnsubscribedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    subscribable: Subscribable;
  }

  /*
    description: Represents a 'merged' event on a given pull request.
  */
  interface IMergedEvent {
    __typename: string;
    actor: Actor | null;
    commit: ICommit | null;
    createdAt: any;
    id: string;
    mergeRef: IRef | null;
    mergeRefName: string;
    pullRequest: IPullRequest;
    resourcePath: any;
    url: any;
  }

  /*
    description: Represents a 'referenced' event on a given `ReferencedSubject`.
  */
  interface IReferencedEvent {
    __typename: string;
    actor: Actor | null;
    commit: ICommit | null;
    commitRepository: IRepository;
    createdAt: any;
    id: string;
    isCrossReference: boolean;
    isCrossRepository: boolean;
    isDirectReference: boolean;
    subject: ReferencedSubject;
  }

  /*
    description: Any referencable object
  */
  type ReferencedSubject = IIssue | IPullRequest;



  /*
    description: Represents an 'assigned' event on any assignable object.
  */
  interface IAssignedEvent {
    __typename: string;
    actor: Actor | null;
    assignable: Assignable;
    createdAt: any;
    id: string;
    user: IUser | null;
  }

  /*
    description: Represents an 'unassigned' event on any assignable object.
  */
  interface IUnassignedEvent {
    __typename: string;
    actor: Actor | null;
    assignable: Assignable;
    createdAt: any;
    id: string;
    user: IUser | null;
  }

  /*
    description: Represents a 'labeled' event on a given issue or pull request.
  */
  interface ILabeledEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    label: ILabel;
    labelable: Labelable;
  }

  /*
    description: Represents an 'unlabeled' event on a given issue or pull request.
  */
  interface IUnlabeledEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    label: ILabel;
    labelable: Labelable;
  }

  /*
    description: Represents a 'milestoned' event on a given issue or pull request.
  */
  interface IMilestonedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    milestoneTitle: string;
    subject: MilestoneItem;
  }

  /*
    description: Types that can be inside a Milestone.
  */
  type MilestoneItem = IIssue | IPullRequest;



  /*
    description: Represents a 'demilestoned' event on a given issue or pull request.
  */
  interface IDemilestonedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    milestoneTitle: string;
    subject: MilestoneItem;
  }

  /*
    description: Represents a 'renamed' event on a given issue or pull request
  */
  interface IRenamedTitleEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    currentTitle: string;
    id: string;
    previousTitle: string;
    subject: RenamedTitleSubject;
  }

  /*
    description: An object which has a renamable title
  */
  type RenamedTitleSubject = IIssue | IPullRequest;



  /*
    description: Represents a 'locked' event on a given issue or pull request.
  */
  interface ILockedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    lockable: Lockable;
  }

  /*
    description: Represents an 'unlocked' event on a given issue or pull request.
  */
  interface IUnlockedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    lockable: Lockable;
  }

  /*
    description: Represents a 'deployed' event on a given pull request.
  */
  interface IDeployedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    deployment: IDeployment;
    id: string;
    pullRequest: IPullRequest;
    ref: IRef | null;
  }

  /*
    description: Represents triggered deployment instance.
  */
  interface IDeployment {
    __typename: string;
    commit: ICommit | null;
    createdAt: any;
    creator: Actor | null;
    environment: string | null;
    id: string;
    latestStatus: IDeploymentStatus | null;
    repository: IRepository;
    state: IDeploymentStateEnum | null;
    statuses: IDeploymentStatusConnection | null;
  }

  /*
    description: Describes the status of a given deployment attempt.
  */
  interface IDeploymentStatus {
    __typename: string;
    creator: Actor | null;
    deployment: IDeployment;
    description: string | null;
    environmentUrl: any | null;
    id: string;
    logUrl: any | null;
    state: IDeploymentStatusStateEnum;
  }

  /*
    description: The possible states for a deployment status.
  */
  type IDeploymentStatusStateEnum = 'PENDING' | 'SUCCESS' | 'FAILURE' | 'INACTIVE' | 'ERROR';

  /*
    description: The possible states in which a deployment can be.
  */
  type IDeploymentStateEnum = 'ABANDONED' | 'ACTIVE' | 'DESTROYED' | 'ERROR' | 'FAILURE' | 'INACTIVE' | 'PENDING';

  /*
    description: The connection type for DeploymentStatus.
  */
  interface IDeploymentStatusConnection {
    __typename: string;
    edges: Array<IDeploymentStatusEdge> | null;
    nodes: Array<IDeploymentStatus> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IDeploymentStatusEdge {
    __typename: string;
    cursor: string;
    node: IDeploymentStatus | null;
  }

  /*
    description: Represents a 'head_ref_deleted' event on a given pull request.
  */
  interface IHeadRefDeletedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    headRef: IRef | null;
    headRefName: string;
    id: string;
    pullRequest: IPullRequest;
  }

  /*
    description: Represents a 'head_ref_restored' event on a given pull request.
  */
  interface IHeadRefRestoredEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    pullRequest: IPullRequest;
  }

  /*
    description: Represents a 'head_ref_force_pushed' event on a given pull request.
  */
  interface IHeadRefForcePushedEvent {
    __typename: string;
    actor: Actor | null;
    afterCommit: ICommit;
    beforeCommit: ICommit;
    createdAt: any;
    id: string;
    pullRequest: IPullRequest;
    ref: IRef | null;
  }

  /*
    description: Represents a 'base_ref_force_pushed' event on a given pull request.
  */
  interface IBaseRefForcePushedEvent {
    __typename: string;
    actor: Actor | null;
    afterCommit: ICommit;
    beforeCommit: ICommit;
    createdAt: any;
    id: string;
    pullRequest: IPullRequest;
    ref: IRef | null;
  }

  /*
    description: Represents an 'review_requested' event on a given pull request.
  */
  interface IReviewRequestedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    pullRequest: IPullRequest;
    subject: IUser;
  }

  /*
    description: Represents an 'review_request_removed' event on a given pull request.
  */
  interface IReviewRequestRemovedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    id: string;
    pullRequest: IPullRequest;
    subject: IUser;
  }

  /*
    description: Represents a 'review_dismissed' event on a given issue or pull request.
  */
  interface IReviewDismissedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    id: string;
    message: string;
    messageHtml: any;
    previousReviewState: IPullRequestReviewStateEnum;
    pullRequest: IPullRequest;
    pullRequestCommit: IPullRequestCommit | null;
    resourcePath: any;
    review: IPullRequestReview | null;
    url: any;
  }

  /*
    description: The connection type for Deployment.
  */
  interface IDeploymentConnection {
    __typename: string;
    edges: Array<IDeploymentEdge> | null;
    nodes: Array<IDeployment> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IDeploymentEdge {
    __typename: string;
    cursor: string;
    node: IDeployment | null;
  }

  /*
    description: Used for return value of Repository.issueOrPullRequest.
  */
  type IssueOrPullRequest = IIssue | IPullRequest;



  /*
    description: Ordering options for language connections.
  */
  interface ILanguageOrder {
    field: ILanguageOrderFieldEnum;
    direction: IOrderDirectionEnum;
  }

  /*
    description: Properties by which language connections can be ordered.
  */
  type ILanguageOrderFieldEnum = 'SIZE';

  /*
    description: A list of languages associated with the parent.
  */
  interface ILanguageConnection {
    __typename: string;
    edges: Array<ILanguageEdge> | null;
    nodes: Array<ILanguage> | null;
    pageInfo: IPageInfo;
    totalCount: number;
    totalSize: number;
  }

  /*
    description: Represents the language of a repository.
  */
  interface ILanguageEdge {
    __typename: string;
    cursor: string;
    node: ILanguage;
    size: number;
  }

  /*
    description: Represents a given language found in repositories.
  */
  interface ILanguage {
    __typename: string;
    color: string | null;
    id: string;
    name: string;
  }

  /*
    description: Represents a Milestone object on a given repository.
  */
  interface IMilestone {
    __typename: string;
    creator: Actor | null;
    description: string | null;
    dueOn: any | null;
    id: string;
    number: number;
    repository: IRepository;
    resourcePath: any;
    state: IMilestoneStateEnum;
    title: string;
    url: any;
  }

  /*
    description: The possible states of a milestone.
  */
  type IMilestoneStateEnum = 'OPEN' | 'CLOSED';

  /*
    description: The connection type for Milestone.
  */
  interface IMilestoneConnection {
    __typename: string;
    edges: Array<IMilestoneEdge> | null;
    nodes: Array<IMilestone> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IMilestoneEdge {
    __typename: string;
    cursor: string;
    node: IMilestone | null;
  }

  /*
    description: Ways in which lists of projects can be ordered upon return.
  */
  interface IProjectOrder {
    field: IProjectOrderFieldEnum;
    direction: IOrderDirectionEnum;
  }

  /*
    description: Properties by which project connections can be ordered.
  */
  type IProjectOrderFieldEnum = 'CREATED_AT' | 'UPDATED_AT' | 'NAME';

  /*
    description: State of the project; either 'open' or 'closed'
  */
  type IProjectStateEnum = 'OPEN' | 'CLOSED';

  /*
    description: A list of projects associated with the owner.
  */
  interface IProjectConnection {
    __typename: string;
    edges: Array<IProjectEdge> | null;
    nodes: Array<IProject> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IProjectEdge {
    __typename: string;
    cursor: string;
    node: IProject | null;
  }

  /*
    description: The connection type for ProtectedBranch.
  */
  interface IProtectedBranchConnection {
    __typename: string;
    edges: Array<IProtectedBranchEdge> | null;
    nodes: Array<IProtectedBranch> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IProtectedBranchEdge {
    __typename: string;
    cursor: string;
    node: IProtectedBranch | null;
  }

  /*
    description: A repository protected branch.
  */
  interface IProtectedBranch {
    __typename: string;
    creator: Actor | null;
    hasDismissableStaleReviews: boolean;
    hasRequiredReviews: boolean;
    hasRequiredStatusChecks: boolean;
    hasRestrictedPushes: boolean;
    hasRestrictedReviewDismissals: boolean;
    hasStrictRequiredStatusChecks: boolean;
    id: string;
    isAdminEnforced: boolean;
    name: string;
    pushAllowances: IPushAllowanceConnection;
    repository: IRepository;
    requiredStatusCheckContexts: Array<string> | null;
    reviewDismissalAllowances: IReviewDismissalAllowanceConnection;
  }

  /*
    description: The connection type for PushAllowance.
  */
  interface IPushAllowanceConnection {
    __typename: string;
    edges: Array<IPushAllowanceEdge> | null;
    nodes: Array<IPushAllowance> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IPushAllowanceEdge {
    __typename: string;
    cursor: string;
    node: IPushAllowance | null;
  }

  /*
    description: A team or user who has the ability to push to a protected branch.
  */
  interface IPushAllowance {
    __typename: string;
    actor: PushAllowanceActor | null;
    id: string;
    protectedBranch: IProtectedBranch;
  }

  /*
    description: Types that can be an actor.
  */
  type PushAllowanceActor = IUser | ITeam;



  /*
    description: A team of users in an organization.
  */
  interface ITeam {
    __typename: string;
    description: string | null;
    editTeamResourcePath: any;
    editTeamUrl: any;
    id: string;
    invitations: IOrganizationInvitationConnection | null;
    name: string;
    organization: IOrganization;
    privacy: ITeamPrivacyEnum;
    resourcePath: any;
    slug: string;
    url: any;
  }

  /*
    description: The connection type for OrganizationInvitation.
  */
  interface IOrganizationInvitationConnection {
    __typename: string;
    edges: Array<IOrganizationInvitationEdge> | null;
    nodes: Array<IOrganizationInvitation> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IOrganizationInvitationEdge {
    __typename: string;
    cursor: string;
    node: IOrganizationInvitation | null;
  }

  /*
    description: An Invitation for a user to an organization.
  */
  interface IOrganizationInvitation {
    __typename: string;
    email: string | null;
    id: string;
    invitee: IUser | null;
    inviter: IUser;
    role: IOrganizationInvitationRoleEnum;
  }

  /*
    description: The possible organization invitation roles.
  */
  type IOrganizationInvitationRoleEnum = 'DIRECT_MEMBER' | 'ADMIN' | 'BILLING_MANAGER' | 'REINSTATE';

  /*
    description: The possible team privacy values.
  */
  type ITeamPrivacyEnum = 'SECRET' | 'VISIBLE';

  /*
    description: The connection type for ReviewDismissalAllowance.
  */
  interface IReviewDismissalAllowanceConnection {
    __typename: string;
    edges: Array<IReviewDismissalAllowanceEdge> | null;
    nodes: Array<IReviewDismissalAllowance> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IReviewDismissalAllowanceEdge {
    __typename: string;
    cursor: string;
    node: IReviewDismissalAllowance | null;
  }

  /*
    description: A team or user who has the ability to dismiss a review on a protected branch.
  */
  interface IReviewDismissalAllowance {
    __typename: string;
    actor: ReviewDismissalAllowanceActor | null;
    id: string;
    protectedBranch: IProtectedBranch;
  }

  /*
    description: Types that can be an actor.
  */
  type ReviewDismissalAllowanceActor = IUser | ITeam;



  /*
    description: The connection type for Ref.
  */
  interface IRefConnection {
    __typename: string;
    edges: Array<IRefEdge> | null;
    nodes: Array<IRef> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IRefEdge {
    __typename: string;
    cursor: string;
    node: IRef | null;
  }

  /*
    description: The connection type for Release.
  */
  interface IReleaseConnection {
    __typename: string;
    edges: Array<IReleaseEdge> | null;
    nodes: Array<IRelease> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IReleaseEdge {
    __typename: string;
    cursor: string;
    node: IRelease | null;
  }

  /*
    description: A release contains the content for a release.
  */
  interface IRelease {
    __typename: string;
    description: string | null;
    id: string;
    name: string | null;
    publishedAt: any | null;
    releaseAssets: IReleaseAssetConnection;
    resourcePath: any;
    tag: IRef | null;
    url: any;
  }

  /*
    description: The connection type for ReleaseAsset.
  */
  interface IReleaseAssetConnection {
    __typename: string;
    edges: Array<IReleaseAssetEdge> | null;
    nodes: Array<IReleaseAsset> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IReleaseAssetEdge {
    __typename: string;
    cursor: string;
    node: IReleaseAsset | null;
  }

  /*
    description: A release asset contains the content for a release asset.
  */
  interface IReleaseAsset {
    __typename: string;
    id: string;
    name: string;
    release: IRelease | null;
    url: any;
  }

  /*
    description: The connection type for RepositoryTopic.
  */
  interface IRepositoryTopicConnection {
    __typename: string;
    edges: Array<IRepositoryTopicEdge> | null;
    nodes: Array<IRepositoryTopic> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IRepositoryTopicEdge {
    __typename: string;
    cursor: string;
    node: IRepositoryTopic | null;
  }

  /*
    description: A repository-topic connects a repository to a topic.
  */
  interface IRepositoryTopic {
    __typename: string;
    id: string;
    resourcePath: any;
    topic: ITopic;
    url: any;
  }

  /*
    description: A topic aggregates entities that are related to a subject.
  */
  interface ITopic {
    __typename: string;
    id: string;
    name: string;
    relatedTopics: Array<ITopic>;
  }

  /*
    description: The connection type for User.
  */
  interface IFollowerConnection {
    __typename: string;
    edges: Array<IUserEdge> | null;
    nodes: Array<IUser> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: The connection type for User.
  */
  interface IFollowingConnection {
    __typename: string;
    edges: Array<IUserEdge> | null;
    nodes: Array<IUser> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: A Gist.
  */
  interface IGist {
    __typename: string;
    comments: IGistCommentConnection;
    createdAt: any;
    description: string | null;
    id: string;
    isPublic: boolean;
    name: string;
    owner: RepositoryOwner | null;
    stargazers: IStargazerConnection;
    updatedAt: any;
    viewerHasStarred: boolean;
  }

  /*
    description: The connection type for GistComment.
  */
  interface IGistCommentConnection {
    __typename: string;
    edges: Array<IGistCommentEdge> | null;
    nodes: Array<IGistComment> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IGistCommentEdge {
    __typename: string;
    cursor: string;
    node: IGistComment | null;
  }

  /*
    description: Represents a comment on an Gist.
  */
  interface IGistComment {
    __typename: string;
    author: Actor | null;
    authorAssociation: ICommentAuthorAssociationEnum;
    body: string;
    bodyHTML: any;
    createdAt: any;
    createdViaEmail: boolean;
    editor: Actor | null;
    id: string;
    lastEditedAt: any | null;
    publishedAt: any | null;
    updatedAt: any;
    viewerCanDelete: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: Array<ICommentCannotUpdateReasonEnum>;
    viewerDidAuthor: boolean;
  }

  /*
    description: The privacy of a Gist
  */
  type IGistPrivacyEnum = 'PUBLIC' | 'SECRET' | 'ALL';

  /*
    description: The connection type for Gist.
  */
  interface IGistConnection {
    __typename: string;
    edges: Array<IGistEdge> | null;
    nodes: Array<IGist> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IGistEdge {
    __typename: string;
    cursor: string;
    node: IGist | null;
  }

  /*
    description: The connection type for Organization.
  */
  interface IOrganizationConnection {
    __typename: string;
    edges: Array<IOrganizationEdge> | null;
    nodes: Array<IOrganization> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IOrganizationEdge {
    __typename: string;
    cursor: string;
    node: IOrganization | null;
  }

  /*
    description: The connection type for Repository.
  */
  interface IStarredRepositoryConnection {
    __typename: string;
    edges: Array<IStarredRepositoryEdge> | null;
    nodes: Array<IRepository> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: Represents a starred repository.
  */
  interface IStarredRepositoryEdge {
    __typename: string;
    cursor: string;
    node: IRepository;
    starredAt: any;
  }

  /*
    description: The connection type for IssueTimelineItem.
  */
  interface IIssueTimelineConnection {
    __typename: string;
    edges: Array<IIssueTimelineItemEdge> | null;
    nodes: Array<IssueTimelineItem> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IIssueTimelineItemEdge {
    __typename: string;
    cursor: string;
    node: IssueTimelineItem | null;
  }

  /*
    description: An item in an issue timeline
  */
  type IssueTimelineItem = ICommit | IIssueComment | IClosedEvent | IReopenedEvent | ISubscribedEvent | IUnsubscribedEvent | IReferencedEvent | IAssignedEvent | IUnassignedEvent | ILabeledEvent | IUnlabeledEvent | IMilestonedEvent | IDemilestonedEvent | IRenamedTitleEvent | ILockedEvent | IUnlockedEvent;



  /*
    description: Various content states of a ProjectCard
  */
  type IProjectCardStateEnum = 'CONTENT_ONLY' | 'NOTE_ONLY' | 'REDACTED';

  /*
    description: An Identity Provider configured to provision SAML and SCIM identities for Organizations
  */
  interface IOrganizationIdentityProvider {
    __typename: string;
    digestMethod: any | null;
    externalIdentities: IExternalIdentityConnection;
    id: string;
    idpCertificate: any | null;
    issuer: string | null;
    organization: IOrganization | null;
    signatureMethod: any | null;
    ssoUrl: any | null;
  }

  /*
    description: The connection type for ExternalIdentity.
  */
  interface IExternalIdentityConnection {
    __typename: string;
    edges: Array<IExternalIdentityEdge> | null;
    nodes: Array<IExternalIdentity> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface IExternalIdentityEdge {
    __typename: string;
    cursor: string;
    node: IExternalIdentity | null;
  }

  /*
    description: An external identity provisioned by SAML SSO or SCIM.
  */
  interface IExternalIdentity {
    __typename: string;
    guid: string;
    id: string;
    organizationInvitation: IOrganizationInvitation | null;
    samlIdentity: IExternalIdentitySamlAttributes | null;
    scimIdentity: IExternalIdentityScimAttributes | null;
    user: IUser | null;
  }

  /*
    description: SAML attributes for the External Identity
  */
  interface IExternalIdentitySamlAttributes {
    __typename: string;
    nameId: string | null;
  }

  /*
    description: SCIM attributes for the External Identity
  */
  interface IExternalIdentityScimAttributes {
    __typename: string;
    username: string | null;
  }

  /*
    description: The role of a user on a team.
  */
  type ITeamRoleEnum = 'ADMIN' | 'MEMBER';

  /*
    description: Ways in which team connections can be ordered.
  */
  interface ITeamOrder {
    field: ITeamOrderFieldEnum;
    direction: IOrderDirectionEnum;
  }

  /*
    description: Properties by which team connections can be ordered.
  */
  type ITeamOrderFieldEnum = 'NAME';

  /*
    description: The connection type for Team.
  */
  interface ITeamConnection {
    __typename: string;
    edges: Array<ITeamEdge> | null;
    nodes: Array<ITeam> | null;
    pageInfo: IPageInfo;
    totalCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface ITeamEdge {
    __typename: string;
    cursor: string;
    node: ITeam | null;
  }

  /*
    description: Represents the client's rate limit.
  */
  interface IRateLimit {
    __typename: string;
    cost: number;
    limit: number;
    remaining: number;
    resetAt: any;
  }

  /*
    description: Represents the individual results of a search.
  */
  type ISearchTypeEnum = 'ISSUE' | 'REPOSITORY' | 'USER';

  /*
    description: A list of results that matched against a search query.
  */
  interface ISearchResultItemConnection {
    __typename: string;
    codeCount: number;
    edges: Array<ISearchResultItemEdge> | null;
    issueCount: number;
    nodes: Array<SearchResultItem> | null;
    pageInfo: IPageInfo;
    repositoryCount: number;
    userCount: number;
    wikiCount: number;
  }

  /*
    description: An edge in a connection.
  */
  interface ISearchResultItemEdge {
    __typename: string;
    cursor: string;
    node: SearchResultItem | null;
  }

  /*
    description: The results of a search.
  */
  type SearchResultItem = IIssue | IPullRequest | IRepository | IUser | IOrganization;



  /*
    description: The root query for implementing GraphQL mutations.
  */
  interface IMutation {
    __typename: string;
    acceptTopicSuggestion: IAcceptTopicSuggestionPayload | null;
    addComment: IAddCommentPayload | null;
    addProjectCard: IAddProjectCardPayload | null;
    addProjectColumn: IAddProjectColumnPayload | null;
    addPullRequestReview: IAddPullRequestReviewPayload | null;
    addPullRequestReviewComment: IAddPullRequestReviewCommentPayload | null;
    addReaction: IAddReactionPayload | null;
    addStar: IAddStarPayload | null;
    createProject: ICreateProjectPayload | null;
    declineTopicSuggestion: IDeclineTopicSuggestionPayload | null;
    deleteProject: IDeleteProjectPayload | null;
    deleteProjectCard: IDeleteProjectCardPayload | null;
    deleteProjectColumn: IDeleteProjectColumnPayload | null;
    deletePullRequestReview: IDeletePullRequestReviewPayload | null;
    dismissPullRequestReview: IDismissPullRequestReviewPayload | null;
    moveProjectCard: IMoveProjectCardPayload | null;
    moveProjectColumn: IMoveProjectColumnPayload | null;
    removeOutsideCollaborator: IRemoveOutsideCollaboratorPayload | null;
    removeReaction: IRemoveReactionPayload | null;
    removeStar: IRemoveStarPayload | null;
    requestReviews: IRequestReviewsPayload | null;
    submitPullRequestReview: ISubmitPullRequestReviewPayload | null;
    updateProject: IUpdateProjectPayload | null;
    updateProjectCard: IUpdateProjectCardPayload | null;
    updateProjectColumn: IUpdateProjectColumnPayload | null;
    updatePullRequestReview: IUpdatePullRequestReviewPayload | null;
    updatePullRequestReviewComment: IUpdatePullRequestReviewCommentPayload | null;
    updateSubscription: IUpdateSubscriptionPayload | null;
    updateTopics: IUpdateTopicsPayload | null;
  }

  /*
    description: Autogenerated input type of AcceptTopicSuggestion
  */
  interface IAcceptTopicSuggestionInput {
    clientMutationId?: string | null;
    repositoryId: string;
    name: string;
  }

  /*
    description: Autogenerated return type of AcceptTopicSuggestion
  */
  interface IAcceptTopicSuggestionPayload {
    __typename: string;
    clientMutationId: string | null;
    topic: ITopic;
  }

  /*
    description: Autogenerated input type of AddComment
  */
  interface IAddCommentInput {
    clientMutationId?: string | null;
    subjectId: string;
    body: string;
  }

  /*
    description: Autogenerated return type of AddComment
  */
  interface IAddCommentPayload {
    __typename: string;
    clientMutationId: string | null;
    commentEdge: IIssueCommentEdge;
    subject: Node;
    timelineEdge: IIssueTimelineItemEdge;
  }

  /*
    description: Autogenerated input type of AddProjectCard
  */
  interface IAddProjectCardInput {
    clientMutationId?: string | null;
    projectColumnId: string;
    contentId?: string | null;
    note?: string | null;
  }

  /*
    description: Autogenerated return type of AddProjectCard
  */
  interface IAddProjectCardPayload {
    __typename: string;
    cardEdge: IProjectCardEdge;
    clientMutationId: string | null;
    projectColumn: IProject;
  }

  /*
    description: Autogenerated input type of AddProjectColumn
  */
  interface IAddProjectColumnInput {
    clientMutationId?: string | null;
    projectId: string;
    name: string;
  }

  /*
    description: Autogenerated return type of AddProjectColumn
  */
  interface IAddProjectColumnPayload {
    __typename: string;
    clientMutationId: string | null;
    columnEdge: IProjectColumnEdge;
    project: IProject;
  }

  /*
    description: Autogenerated input type of AddPullRequestReview
  */
  interface IAddPullRequestReviewInput {
    clientMutationId?: string | null;
    pullRequestId: string;
    commitOID?: any | null;
    body?: string | null;
    event?: IPullRequestReviewEventEnum | null;
    comments?: Array<IDraftPullRequestReviewComment> | null;
  }

  /*
    description: The possible events to perform on a pull request review.
  */
  type IPullRequestReviewEventEnum = 'COMMENT' | 'APPROVE' | 'REQUEST_CHANGES' | 'DISMISS';

  /*
    description: Specifies a review comment to be left with a Pull Request Review.
  */
  interface IDraftPullRequestReviewComment {
    path: string;
    position: number;
    body: string;
  }

  /*
    description: Autogenerated return type of AddPullRequestReview
  */
  interface IAddPullRequestReviewPayload {
    __typename: string;
    clientMutationId: string | null;
    pullRequestReview: IPullRequestReview;
    reviewEdge: IPullRequestReviewEdge;
  }

  /*
    description: Autogenerated input type of AddPullRequestReviewComment
  */
  interface IAddPullRequestReviewCommentInput {
    clientMutationId?: string | null;
    pullRequestReviewId: string;
    commitOID?: any | null;
    body: string;
    path?: string | null;
    position?: number | null;
    inReplyTo?: string | null;
  }

  /*
    description: Autogenerated return type of AddPullRequestReviewComment
  */
  interface IAddPullRequestReviewCommentPayload {
    __typename: string;
    clientMutationId: string | null;
    comment: IPullRequestReviewComment;
    commentEdge: IPullRequestReviewCommentEdge;
  }

  /*
    description: Autogenerated input type of AddReaction
  */
  interface IAddReactionInput {
    clientMutationId?: string | null;
    subjectId: string;
    content: IReactionContentEnum;
  }

  /*
    description: Autogenerated return type of AddReaction
  */
  interface IAddReactionPayload {
    __typename: string;
    clientMutationId: string | null;
    reaction: IReaction;
    subject: Reactable;
  }

  /*
    description: Autogenerated input type of AddStar
  */
  interface IAddStarInput {
    clientMutationId?: string | null;
    starrableId: string;
  }

  /*
    description: Autogenerated return type of AddStar
  */
  interface IAddStarPayload {
    __typename: string;
    clientMutationId: string | null;
    starrable: Starrable;
  }

  /*
    description: Autogenerated input type of CreateProject
  */
  interface ICreateProjectInput {
    clientMutationId?: string | null;
    ownerId: string;
    name: string;
    body?: string | null;
  }

  /*
    description: Autogenerated return type of CreateProject
  */
  interface ICreateProjectPayload {
    __typename: string;
    clientMutationId: string | null;
    project: IProject;
  }

  /*
    description: Autogenerated input type of DeclineTopicSuggestion
  */
  interface IDeclineTopicSuggestionInput {
    clientMutationId?: string | null;
    repositoryId: string;
    name: string;
    reason: ITopicSuggestionDeclineReasonEnum;
  }

  /*
    description: Reason that the suggested topic is declined.
  */
  type ITopicSuggestionDeclineReasonEnum = 'NOT_RELEVANT' | 'TOO_SPECIFIC' | 'PERSONAL_PREFERENCE' | 'TOO_GENERAL';

  /*
    description: Autogenerated return type of DeclineTopicSuggestion
  */
  interface IDeclineTopicSuggestionPayload {
    __typename: string;
    clientMutationId: string | null;
    topic: ITopic;
  }

  /*
    description: Autogenerated input type of DeleteProject
  */
  interface IDeleteProjectInput {
    clientMutationId?: string | null;
    projectId: string;
  }

  /*
    description: Autogenerated return type of DeleteProject
  */
  interface IDeleteProjectPayload {
    __typename: string;
    clientMutationId: string | null;
    owner: ProjectOwner;
  }

  /*
    description: Autogenerated input type of DeleteProjectCard
  */
  interface IDeleteProjectCardInput {
    clientMutationId?: string | null;
    cardId: string;
  }

  /*
    description: Autogenerated return type of DeleteProjectCard
  */
  interface IDeleteProjectCardPayload {
    __typename: string;
    clientMutationId: string | null;
    column: IProjectColumn;
    deletedCardId: string;
  }

  /*
    description: Autogenerated input type of DeleteProjectColumn
  */
  interface IDeleteProjectColumnInput {
    clientMutationId?: string | null;
    columnId: string;
  }

  /*
    description: Autogenerated return type of DeleteProjectColumn
  */
  interface IDeleteProjectColumnPayload {
    __typename: string;
    clientMutationId: string | null;
    deletedColumnId: string;
    project: IProject;
  }

  /*
    description: Autogenerated input type of DeletePullRequestReview
  */
  interface IDeletePullRequestReviewInput {
    clientMutationId?: string | null;
    pullRequestReviewId: string;
  }

  /*
    description: Autogenerated return type of DeletePullRequestReview
  */
  interface IDeletePullRequestReviewPayload {
    __typename: string;
    clientMutationId: string | null;
    pullRequestReview: IPullRequestReview;
  }

  /*
    description: Autogenerated input type of DismissPullRequestReview
  */
  interface IDismissPullRequestReviewInput {
    clientMutationId?: string | null;
    pullRequestReviewId: string;
    message: string;
  }

  /*
    description: Autogenerated return type of DismissPullRequestReview
  */
  interface IDismissPullRequestReviewPayload {
    __typename: string;
    clientMutationId: string | null;
    pullRequestReview: IPullRequestReview;
  }

  /*
    description: Autogenerated input type of MoveProjectCard
  */
  interface IMoveProjectCardInput {
    clientMutationId?: string | null;
    cardId: string;
    columnId: string;
    afterCardId?: string | null;
  }

  /*
    description: Autogenerated return type of MoveProjectCard
  */
  interface IMoveProjectCardPayload {
    __typename: string;
    cardEdge: IProjectCardEdge;
    clientMutationId: string | null;
  }

  /*
    description: Autogenerated input type of MoveProjectColumn
  */
  interface IMoveProjectColumnInput {
    clientMutationId?: string | null;
    columnId: string;
    afterColumnId?: string | null;
  }

  /*
    description: Autogenerated return type of MoveProjectColumn
  */
  interface IMoveProjectColumnPayload {
    __typename: string;
    clientMutationId: string | null;
    columnEdge: IProjectColumnEdge;
  }

  /*
    description: Autogenerated input type of RemoveOutsideCollaborator
  */
  interface IRemoveOutsideCollaboratorInput {
    clientMutationId?: string | null;
    userId: string;
    organizationId: string;
  }

  /*
    description: Autogenerated return type of RemoveOutsideCollaborator
  */
  interface IRemoveOutsideCollaboratorPayload {
    __typename: string;
    clientMutationId: string | null;
    removedUser: IUser;
  }

  /*
    description: Autogenerated input type of RemoveReaction
  */
  interface IRemoveReactionInput {
    clientMutationId?: string | null;
    subjectId: string;
    content: IReactionContentEnum;
  }

  /*
    description: Autogenerated return type of RemoveReaction
  */
  interface IRemoveReactionPayload {
    __typename: string;
    clientMutationId: string | null;
    reaction: IReaction;
    subject: Reactable;
  }

  /*
    description: Autogenerated input type of RemoveStar
  */
  interface IRemoveStarInput {
    clientMutationId?: string | null;
    starrableId: string;
  }

  /*
    description: Autogenerated return type of RemoveStar
  */
  interface IRemoveStarPayload {
    __typename: string;
    clientMutationId: string | null;
    starrable: Starrable;
  }

  /*
    description: Autogenerated input type of RequestReviews
  */
  interface IRequestReviewsInput {
    clientMutationId?: string | null;
    pullRequestId: string;
    userIds: Array<string>;
    teamIds: Array<string>;
    union?: boolean | null;
  }

  /*
    description: Autogenerated return type of RequestReviews
  */
  interface IRequestReviewsPayload {
    __typename: string;
    clientMutationId: string | null;
    pullRequest: IPullRequest;
    requestedReviewersEdge: IUserEdge;
  }

  /*
    description: Autogenerated input type of SubmitPullRequestReview
  */
  interface ISubmitPullRequestReviewInput {
    clientMutationId?: string | null;
    pullRequestReviewId: string;
    event: IPullRequestReviewEventEnum;
    body?: string | null;
  }

  /*
    description: Autogenerated return type of SubmitPullRequestReview
  */
  interface ISubmitPullRequestReviewPayload {
    __typename: string;
    clientMutationId: string | null;
    pullRequestReview: IPullRequestReview;
  }

  /*
    description: Autogenerated input type of UpdateProject
  */
  interface IUpdateProjectInput {
    clientMutationId?: string | null;
    projectId: string;
    name: string;
    body?: string | null;
    state?: IProjectStateEnum | null;
  }

  /*
    description: Autogenerated return type of UpdateProject
  */
  interface IUpdateProjectPayload {
    __typename: string;
    clientMutationId: string | null;
    project: IProject;
  }

  /*
    description: Autogenerated input type of UpdateProjectCard
  */
  interface IUpdateProjectCardInput {
    clientMutationId?: string | null;
    projectCardId: string;
    note: string;
  }

  /*
    description: Autogenerated return type of UpdateProjectCard
  */
  interface IUpdateProjectCardPayload {
    __typename: string;
    clientMutationId: string | null;
    projectCard: IProjectCard;
  }

  /*
    description: Autogenerated input type of UpdateProjectColumn
  */
  interface IUpdateProjectColumnInput {
    clientMutationId?: string | null;
    projectColumnId: string;
    name: string;
  }

  /*
    description: Autogenerated return type of UpdateProjectColumn
  */
  interface IUpdateProjectColumnPayload {
    __typename: string;
    clientMutationId: string | null;
    projectColumn: IProjectColumn;
  }

  /*
    description: Autogenerated input type of UpdatePullRequestReview
  */
  interface IUpdatePullRequestReviewInput {
    clientMutationId?: string | null;
    pullRequestReviewId: string;
    body: string;
  }

  /*
    description: Autogenerated return type of UpdatePullRequestReview
  */
  interface IUpdatePullRequestReviewPayload {
    __typename: string;
    clientMutationId: string | null;
    pullRequestReview: IPullRequestReview;
  }

  /*
    description: Autogenerated input type of UpdatePullRequestReviewComment
  */
  interface IUpdatePullRequestReviewCommentInput {
    clientMutationId?: string | null;
    pullRequestReviewCommentId: string;
    body: string;
  }

  /*
    description: Autogenerated return type of UpdatePullRequestReviewComment
  */
  interface IUpdatePullRequestReviewCommentPayload {
    __typename: string;
    clientMutationId: string | null;
    pullRequestReviewComment: IPullRequestReviewComment;
  }

  /*
    description: Autogenerated input type of UpdateSubscription
  */
  interface IUpdateSubscriptionInput {
    clientMutationId?: string | null;
    subscribableId: string;
    state: ISubscriptionStateEnum;
  }

  /*
    description: Autogenerated return type of UpdateSubscription
  */
  interface IUpdateSubscriptionPayload {
    __typename: string;
    clientMutationId: string | null;
    subscribable: Subscribable;
  }

  /*
    description: Autogenerated input type of UpdateTopics
  */
  interface IUpdateTopicsInput {
    clientMutationId?: string | null;
    repositoryId: string;
    topicNames: Array<string>;
  }

  /*
    description: Autogenerated return type of UpdateTopics
  */
  interface IUpdateTopicsPayload {
    __typename: string;
    clientMutationId: string | null;
    invalidTopicNames: Array<string>;
    repository: IRepository;
  }

  /*
    description: Represents a Git blob.
  */
  interface IBlob {
    __typename: string;
    abbreviatedOid: string;
    byteSize: number;
    commitResourcePath: any;
    commitUrl: any;
    id: string;
    isBinary: boolean;
    isTruncated: boolean;
    oid: any;
    repository: IRepository;
    text: string | null;
  }

  /*
    description: The possible PubSub channels for an issue.
  */
  type IIssuePubSubTopicEnum = 'UPDATED' | 'MARKASREAD';

  /*
    description: The possible PubSub channels for a pull request.
  */
  type IPullRequestPubSubTopicEnum = 'UPDATED' | 'MARKASREAD' | 'HEAD_REF';

  /*
    description: A special type of user which takes actions on behalf of GitHub Apps.
  */
  interface IBot {
    __typename: string;
    avatarUrl: any;
    databaseId: number | null;
    id: string;
    login: string;
    resourcePath: any;
    url: any;
  }

  /*
    description: The possible default permissions for organization-owned repositories.
  */
  type IDefaultRepositoryPermissionFieldEnum = 'READ' | 'WRITE' | 'ADMIN';

  /*
    description: The affiliation type between collaborator and repository.
  */
  type IRepositoryCollaboratorAffiliationEnum = 'ALL' | 'OUTSIDE';

  /*
    description: Represents a GPG signature on a Commit or Tag.
  */
  interface IGpgSignature {
    __typename: string;
    email: string;
    isValid: boolean;
    keyId: string | null;
    payload: string;
    signature: string;
    signer: IUser | null;
    state: IGitSignatureStateEnum;
  }

  /*
    description: An invitation for a user to be added to a repository.
  */
  interface IRepositoryInvitation {
    __typename: string;
    id: string;
    invitee: IUser;
    inviter: IUser;
    repository: IRepositoryInvitationRepository | null;
  }

  /*
    description: A subset of repository info shared with potential collaborators.
  */
  interface IRepositoryInvitationRepository {
    __typename: string;
    createdAt: any;
    description: string | null;
    descriptionHTML: any;
    hasIssuesEnabled: boolean;
    hasWikiEnabled: boolean;
    homepageUrl: any | null;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    license: string | null;
    lockReason: IRepositoryLockReasonEnum | null;
    mirrorUrl: any | null;
    name: string;
    nameWithOwner: string;
    owner: RepositoryOwner;
    pushedAt: any | null;
    resourcePath: any;
    updatedAt: any;
    url: any;
  }

  /*
    description: Represents an S/MIME signature on a Commit or Tag.
  */
  interface ISmimeSignature {
    __typename: string;
    email: string;
    isValid: boolean;
    payload: string;
    signature: string;
    signer: IUser | null;
    state: IGitSignatureStateEnum;
  }

  /*
    description: Represents a Git tag.
  */
  interface ITag {
    __typename: string;
    abbreviatedOid: string;
    commitResourcePath: any;
    commitUrl: any;
    id: string;
    message: string | null;
    name: string;
    oid: any;
    repository: IRepository;
    tagger: IGitActor | null;
    target: GitObject;
  }

  /*
    description: Represents an unknown signature on a Commit or Tag.
  */
  interface IUnknownSignature {
    __typename: string;
    email: string;
    isValid: boolean;
    payload: string;
    signature: string;
    signer: IUser | null;
    state: IGitSignatureStateEnum;
  }

  /*
    description: Represents a 'added_to_project' event on a given issue or pull request.
  */
  interface IAddedToProjectEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    id: string;
  }

  /*
    description: Represents a 'base_ref_changed' event on a given issue or pull request.
  */
  interface IBaseRefChangedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    id: string;
  }

  /*
    description: Represents a 'comment_deleted' event on a given issue or pull request.
  */
  interface ICommentDeletedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    id: string;
  }

  /*
    description: Represents a 'converted_note_to_issue' event on a given issue or pull request.
  */
  interface IConvertedNoteToIssueEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    id: string;
  }

  /*
    description: Represents a 'mentioned' event on a given issue or pull request.
  */
  interface IMentionedEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    id: string;
  }

  /*
    description: Represents a 'moved_columns_in_project' event on a given issue or pull request.
  */
  interface IMovedColumnsInProjectEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    id: string;
  }

  /*
    description: Represents a 'removed_from_project' event on a given issue or pull request.
  */
  interface IRemovedFromProjectEvent {
    __typename: string;
    actor: Actor | null;
    createdAt: any;
    databaseId: number | null;
    id: string;
  }
}

// tslint:enable
