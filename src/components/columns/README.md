
### Four columns

```js

import {Tag, Button, Container, Column, Columns} from 'bulmatic';

var margin = "5";
var padding = "5";

<Container raw="m-3">
  <Columns is="vcentered">
	<Column has="background-primary text-light border-radius-1" margin={margin} padding={padding}>First column</Column>
	<Column has="background-primary text-light border-radius-2" margin={margin} padding={padding}>Second column</Column>
    <Column has="background-primary text-light border-radius-3" margin={margin} padding={padding}>Third column</Column>
    <Column has="background-primary text-light border-radius-4" margin={margin} padding={padding}>Fourth column</Column>
  </Columns>
</Container>;

```

### Four columns with centered text

```js

import { Tag, Button, Container, Column, Columns } from "bulmatic";

<Container>
  <Columns>
    <Column has="text-centered">First column</Column>
    <Column has="text-centered">Second column</Column>
    <Column has="text-centered">Third column</Column>
    <Column has="text-centered">Fourth column</Column>
  </Columns>
</Container>;





```

### Bulma Documentation
- http://bulma.io/documentation/columns
- http://bulma.io/documentation/column

