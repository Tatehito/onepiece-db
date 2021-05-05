import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    DateField,
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
    DateInput,
    SaveButton
} from 'react-admin';

export const CharacterList = (props:any) => (
    <List {...props} title={ "Characters" } bulkActionButtons={ false } exporter={ false } >
        <Datagrid>
            <TextField source="fullname" />
            <TextField source="age" />
            <TextField source="birthday" />
            <TextField source="id" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const CharacterEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm redirect="list">
            <TextInput source="fullname" />
            <TextInput source="age" />
            <DateInput source="birthday" />
        </SimpleForm>
    </Edit>
);

export const CharacterCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="fullname" />
            <TextInput source="age" />
            <DateInput source="birthday" />
        </SimpleForm>
    </Create>
);

export const CharacterShow = (props:any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="fullname" />
            <TextField source="age" />
            <DateField source="birthday" />
        </SimpleShowLayout>
    </Show>
);