const path = require('path');
const generator = require('kelp-generator');

const createGenerator = ({ source, output }) => {
  return metadata => generator({
    source,
    output,
    plugins: {
      metadata,
      render: 'hbs',
      permalink: null
    }
  })
};

const root = process.cwd();

const create_project = createGenerator({
  source: 'templates',
  output: root
});

const create_page = createGenerator({
  source: 'templates/client/pages/index',
  output: path.join(root, './client/pages')
});

const create_controller = createGenerator({
  source: 'templates/server/controllers',
  output: path.join(root, './server/controllers')
});

const create = async ({ project, controller, page }) => {
  if (project) await create_project(project);
  if (controller) await create_controller(controller);
  if (page) await create_page(page);
};

module.exports = create;