/* global FontAwesomeConfig */

/**
 * 1) First you have to import the @fortawesome/fontawesome library
*/
import fontawesome from '@fortawesome/fontawesome';


/**
 * 2) Then you have to import every icon that you will use
*/
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faSync from '@fortawesome/fontawesome-free-solid/faSync';
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';

/**
 * 3) Tell font-awesome that you want to replace your icons with SVGs (recomended for performance)
*/
fontawesome.config = {
  autoReplaceSvg: 'nest'
}

/**
 * 4) Add the icons into the font-awesome library
*/
fontawesome.library.add(
    faCheck, faGraduationCap, faPlay, faSpinner, faSearch, faGithub,
    faCog, faSync, faEllipsisV, faExternalLinkAlt
);


/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i class="fas fa-check"></i>
*/
