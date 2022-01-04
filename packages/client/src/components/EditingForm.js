import Form from "./styled/Form";
import FormHeader from "./styled/FormHeader";
import InputDiv from "./styled/InputDiv";
import Input from "./styled/Input";
import InputLabel from "./styled/InputLabel";
import TextArea from "./styled/TextArea";
import TextLink from "./TextLink";
import ButtonDiv from "./styled/ButtonDiv";
import Button from "./styled/Button";
import { Eye, EyeSlash } from "phosphor-react";
const EditingForm = ({
  isDraft,
  cancel,
  createChangeObj,
  sendChangeObj,
  post,
}) => {
  return (
    <Form marginTop="0">
      <FormHeader justify="space-between">
        {/* phantom eye for correct eye placement ... yikes! */}
        {isDraft ? (
          <EyeSlash aria-label="" size={48} color="none" />
        ) : (
          <Eye aria-label="" size={48} color="none" />
        )}

        <h2>Edit Post</h2>

        {isDraft ? (
          <EyeSlash aria-label="" />
        ) : (
          <Eye aria-label="" className="published" />
        )}
      </FormHeader>
      <InputDiv>
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input
          name="title"
          value={post.title}
          onChange={(e) => createChangeObj(e)}
        />
      </InputDiv>

      <InputDiv>
        <InputLabel htmlFor="body">Body of Post</InputLabel>
        <TextArea
          name="body"
          value={post.body}
          onChange={(e) => createChangeObj(e)}
        />
      </InputDiv>

      {/* Publish and Submit Section */}
      <ButtonDiv>
        <TextLink
          onClick={cancel}
          text="Cancel"
          link="/"
          className="alt-color"
        />

        <div className="subButtonDiv">
          <Button value={true} onClick={(e) => sendChangeObj(e)}>
            Save Draft
          </Button>
          <Button
            value={false}
            onClick={(e) => sendChangeObj(e)}
            margin="0 0 0 1.5rem"
          >
            Publish
          </Button>
        </div>
      </ButtonDiv>
    </Form>
  );
};

export default EditingForm;
