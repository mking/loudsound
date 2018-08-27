import * as classNames from "classnames";
import * as React from "react";
import "./LoginCallback.scss";
import { Location } from "history";
import { parseQuery } from "../query";
import { fetchProfile } from "../actions/profiles";
import { fetchCategories } from "../actions/categories";
import { Category, Profile } from "../types/spotify";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SongifyState } from "../types/songify";
import { updateToken } from "../actions/logins";

interface LoginCallbackOwnProps {
  className?: string;
  location?: Location;
}

interface LoginCallbackStateProps {
  categories?: Category[];
  profile?: Profile;
}

interface LoginCallbackDispatchProps {
  updateToken?(token: string): void;
  fetchProfile?(): void;
  fetchCategories?(): void;
}

export type LoginCallbackProps = LoginCallbackOwnProps &
  LoginCallbackStateProps &
  LoginCallbackDispatchProps;

export interface LoginCallbackState {
  token?: string;
}

export class LoginCallback extends React.Component<
  LoginCallbackProps,
  LoginCallbackState
> {
  constructor(props: LoginCallbackProps) {
    super(props);

    this.state = {};
  }

  public async componentDidMount() {
    await this.fetchDataIfNeeded();
  }

  public async componentDidUpdate(
    prevProps: LoginCallbackProps,
    prevState: LoginCallbackState
  ) {
    if (this.state.token !== prevState.token) {
      await this.fetchDataIfNeeded();
    }
  }

  public static getDerivedStateFromProps(props: LoginCallbackProps) {
    const query = parseQuery(props.location.hash);
    const token =
      query.access_token == null ? null : (query.access_token as string);
    return {
      token
    };
  }

  private fetchDataIfNeeded = async () => {
    if (!this.state.token) return;

    this.props.updateToken(this.state.token);
    await Promise.all([
      this.props.fetchProfile(),
      this.props.fetchCategories()
    ]);
  };

  public render() {
    return (
      <div className={classNames("login-callback", this.props.className)}>
        <div className="login-callback__header">
          <h1 className="login-callback__heading">
            Welcome back
            {this.props.profile == null
              ? ""
              : `, ${this.props.profile.display_name}`}
            !
          </h1>
        </div>
        <hr className="login-callback__hr" />
        {this.props.categories != null && (
          <ul className="login-callback__categories">
            {this.props.categories.map(category =>
              this.renderCategory(category)
            )}
          </ul>
        )}
      </div>
    );
  }

  private renderCategory = (category: Category) => {
    return (
      <li className="login-callback__category" key={category.id}>
        <Link to={`/categories/${category.id}`}>
          <img
            className="login-callback__category-image"
            style={{
              backgroundImage: `url(${category.icon.url})`
            }}
          />
          <h4 className="login-callback__category-heading">{category.name}</h4>
        </Link>
      </li>
    );
  };
}

const mapStateToProps = (
  state: SongifyState,
  ownProps: LoginCallbackOwnProps
): LoginCallbackStateProps => ({
  categories: state.categories.categories,
  profile: state.profiles.profile
});

const mapDispatchToProps = {
  updateToken,
  fetchProfile,
  fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCallback);
