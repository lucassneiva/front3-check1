import React from 'react';

import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';


class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <section className="project-list">
        { projects.map((project) => <ProjectCard key={ project.title } project={ project } />)}
      </section>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
