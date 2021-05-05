import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ShowButton,
    EditButton,
    Create,
    Edit,
    Show,
    SimpleForm,
    SimpleShowLayout,
    ReferenceInput,
    SelectInput,
    TextInput,
    SaveButton
} from 'react-admin';

export const CharacterList = (props:any) => (
    <List {...props} title={ "Sample" } bulkActionButtons={ false } exporter={ false } >
        <Datagrid>
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="id" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const CharacterEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const CharacterCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);

export const CharacterShow = (props:any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
        </SimpleShowLayout>
    </Show>
);