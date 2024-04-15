import {Component} from 'react'
import {
  Heading,
  MainContainer,
  FormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  MemeContainer,
  TextContenet,
  SubmitButton,
  Container,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageInputUrl: '',
    topTextInput: '',
    bottomTextInput: '',
    activeOptionId: fontSizesOptionsList[0].optionId,
    memeGenerated: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageInputUrl: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionId = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()
    this.setState({memeGenerated: true})
  }

  renderForm = () => {
    const {
      imageInputUrl,
      topTextInput,
      bottomTextInput,
      activeOptionId,
    } = this.state

    return (
      <FormContainer onSubmit={this.onClickSubmit}>
        <CustomLabel htmlFor="ImageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          id="ImageUrl"
          value={imageInputUrl}
          onChange={this.onChangeImageUrl}
          placeholder="Enter the Image URL"
        />

        <CustomLabel htmlFor="ImageUrl">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="ImageUrl"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="ImageUrl">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="ImageUrl"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeOptionId}
          onChange={this.onChangeFontSizeOptionId}
        >
          {fontSizesOptionsList.map(option => (
            <CustomOption key={option.optionId} value={option.optionId}>
              {option.displayText}
            </CustomOption>
          ))}
          {console.log(activeOptionId)}
        </CustomSelect>
        <SubmitButton type="submit">Generate</SubmitButton>
      </FormContainer>
    )
  }

  renderMeme = () => {
    const {
      imageInputUrl,
      topTextInput,
      bottomTextInput,
      activeOptionId,
    } = this.state
    return (
      <MemeContainer data-testid="meme" backgoundImage={imageInputUrl}>
        <TextContenet activeOptionId={activeOptionId}>
          {topTextInput}
        </TextContenet>
        <TextContenet activeOptionId={activeOptionId}>
          {bottomTextInput}
        </TextContenet>
      </MemeContainer>
    )
  }

  render() {
    const {memeGenerated} = this.state
    return (
      <>
        <MainContainer>
          <Container>
            <Heading>Meme Generator</Heading>
            {this.renderForm()}
          </Container>
          {memeGenerated && this.renderMeme()}
        </MainContainer>
      </>
    )
  }
}

export default MemeGenerator
