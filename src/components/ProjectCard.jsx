import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <section className="project-card">
        <img className="project-card-image" src={ project.imagePath } alt={ project.title } />
        <section className="project-card-body">
          <h4 className="project-card-title">{project.title}</h4>
          <h5 className="project-card-subtitle">{project.subtitle}</h5>
          <p className="project-card-storyline">{project.storyline}</p>
        </section>
        <Rating rating={ project.rating } />
      </section>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

ProjectCard.defaultProps = {
  project: PropTypes.shape({
    title: 'Title',
    subtitle: 'Subtitle',
    storyline: 'StoryLine',
    rating: 'Rating',
    imagePath: 'Image',
  }),
};

export default ProjectCard;
