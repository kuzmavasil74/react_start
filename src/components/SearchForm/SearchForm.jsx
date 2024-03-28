import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const SearchFormSchema = Yup.object().shape({
  SearchTerm: Yup.string().required('Search Term is required!'),
})

const FORM_INITIAL_VALUES = {
  SearchTerm: '',
}

const SearchForm = ({ onSetSerchQuaery }) => {
  const handleSubmit = (values) => {
    onSetSerchQuaery(values.SearchTerm)
  }

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={SearchFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Search products by brand or name.</h2>
        <label>
          <Field
            type="text"
            name="SearchTerm"
            placeholder="Enter search query..."
          />
          <ErrorMessage component="p" name="SearchTerm" />
        </label>
        <br />
        <button type="submit" aria-label="Search">
          👀
        </button>
      </Form>
    </Formik>
  )
}

export default SearchForm
