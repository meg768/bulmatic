### Example

``` js

import {Container, Content, Tag, Tags} from 'bulmatic';

<Container>
	<Content>
		<Tags has="addons">
			<Tag tag="span" is="danger">
				Alex Smith
			</Tag>
			<Tag tag="a" is="delete">
			</Tag>
		</Tags>

	</Content>

	<div class="content">

		<div class="tags has-addons">
			<span class="tag is-danger">Alex Smith</span>
			<a class="tag is-delete"></a>
		</div>	

	</div>


</Container>

```