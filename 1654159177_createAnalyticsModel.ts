import { Client } from '@datocms/cli/lib/cma-client-node';

export default async function(client: Client): Promise<void> {
  const trackerModel = await client.itemTypes.create({
    name: 'Tracker',
    api_key: 'tracker',
  });

  const titleField = await client.fields.create(trackerModel, {
    label: 'Title',
    api_key: 'title',
    field_type: 'string',
    validators: {
      required: {},
    },
  });

  const nameField = await client.fields.create(trackerModel, {
    label: 'Name',
    api_key: 'name',
    field_type: 'string',
  });

  const descriptionField = await client.fields.create(trackerModel, {
    label: 'description',
    api_key: 'description',
    field_type: 'text',
    appearance: {
      editor: 'wysiwyg',
      parameters: {},
      addons: [],
    }
  });

  const scriptField = await client.fields.create(trackerModel, {
    label: 'Script',
    api_key: 'script',
    field_type: 'text',
    appearance: {
      editor: 'textarea',
      parameters: {},
      addons: [],
    }
  });

  const essentialField = await client.fields.create(trackerModel, {
    label: 'Essential',
    api_key: 'essential',
    field_type: 'boolean',
  });

  // Create an Article record:
  // https://www.datocms.com/docs/content-management-api/resources/item/create

  // const article = await client.items.create({
  //   item_type: articleModel,
  //   title: 'My first article!',
  // });
}
