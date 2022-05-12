import { ActionPanel, Form, Action, useNavigation } from "@raycast/api";
import { SearchResultsPage } from "..";

export const SearchPage = () => {
  const { push } = useNavigation();

  const handleSubmit = (values: { title: string }) => {
    push(<SearchResultsPage title={values.title} />);
  };

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Search on Unogs" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="title" title="Netflix title" placeholder="Name of your movie/show" />
    </Form>
  );
};
