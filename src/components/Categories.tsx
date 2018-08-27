import * as React from "react";
import * as classNames from "classnames";
import "./Categories.scss";
import { Link } from "react-router-dom";
import { fetchCategories } from "../actions/categories";
import { fetchProfile } from "../actions/profiles";
import { logout } from "../actions/logins";
import { connect } from "react-redux";
import { Category, Profile } from "../types/spotify";
import { SongifyState } from "../types/songify";
import { Button } from "react-bootstrap";

interface CategoriesOwnProps {
  className?: string;
}

interface CategoriesDispatchProps {
  fetchProfile?(): void;
  fetchCategories?(): void;
  logout?(): void;
}

interface CategoriesStateProps {
  profile?: Profile;
  categories?: Category[];
}

export type CategoriesProps = CategoriesOwnProps &
  CategoriesDispatchProps &
  CategoriesStateProps;

export class Categories extends React.Component<CategoriesProps> {
  public async componentDidMount() {
    await this.fetchData();
  }

  private fetchData = async () => {
    await Promise.all([
      this.props.fetchProfile(),
      this.props.fetchCategories()
    ]);
  };

  private handleLogout = async () => {
    await this.props.logout();
  };

  public render() {
    return (
      <div className={classNames("categories", this.props.className)}>
        <div className="categories__header">
          <h1 className="categories__heading">
            Welcome back
            {this.props.profile == null
              ? ""
              : `, ${this.props.profile.display_name}`}
            !
          </h1>
        </div>
        <hr className="categories__hr" />
        {this.props.categories != null && (
          <ul className="categories__categories">
            {this.props.categories.map(category =>
              this.renderCategory(category)
            )}
          </ul>
        )}
        <hr className="categories__hr" />
        <div className="categories__actions">
          <Button type="button" bsStyle="default" onClick={this.handleLogout}>
            Log out
          </Button>
        </div>
      </div>
    );
  }

  private renderCategory = (category: Category) => {
    return (
      <li className="categories__category" key={category.id}>
        <Link to={`/categories/${category.id}`}>
          <img
            className="categories__category-image"
            style={{
              backgroundImage: `url(${category.icon.url})`
            }}
          />
          <h4 className="categories__category-heading">{category.name}</h4>
        </Link>
      </li>
    );
  };
}

function mapStateToProps(
  state: SongifyState,
  ownProps: CategoriesOwnProps
): CategoriesStateProps {
  return {
    categories: state.categories.categories,
    profile: state.profiles.profile
  };
}

const mapDispatchToProps = {
  fetchProfile,
  fetchCategories,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
