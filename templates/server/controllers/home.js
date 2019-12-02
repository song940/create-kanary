---
filename: "/:name"
---

import { get } from 'kanary/router';
import Controller from 'kanary/controller';

class {{ name }} extends Controller {
  @get('/:name?')
  async index(params) {
    const { name } = params;
    return { greeting: `hello ${name}` };
  }
}

export default {{ name }};