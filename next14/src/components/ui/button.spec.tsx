import { render, fireEvent, screen } from '@testing-library/react'

import { Button } from './button'

describe('Button component', () => {
  // Antes de cada teste, limpa o console para evitar poluição
  beforeEach(() => {
    jest.clearAllMocks()
    console.error = jest.fn()
    console.warn = jest.fn()
  })

  // Testa se o componente Button é renderizado corretamente
  test('renders correctly', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  // Testa se a função onClick é chamada corretamente quando o botão é clicado
  test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const buttonElement = screen.getByText('Click me') // Usando screen.getByText
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
