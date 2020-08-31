import store from 'store2'
import { STORAGE_KEY } from './constants'
import { ThemeType } from './themes/themes'

interface IOptions {
  theme: ThemeType
}

const defaultOptions: IOptions = {
  theme: ThemeType.Light,
}

class OptionsCls {
  private readonly state: IOptions
  constructor() {
    const storedData = store.get(STORAGE_KEY.OPTIONS)
    if (storedData) {
      this.state = JSON.parse(storedData)
    } else {
      this.state = defaultOptions
    }
  }

  public getTheme() {
    return this.state.theme
  }

  public setTheme(theme: ThemeType) {
    this.state.theme = theme
    this.save()
  }

  private save() {
    const asString = JSON.stringify(this.state)
    store.set(STORAGE_KEY.OPTIONS, asString)
  }
}

export const Options = new OptionsCls()
