import { ILocationService } from "../interfaces/ILocationService"

export class InMemoryLocationService implements ILocationService {
  private history: Array<{ to: string; state: any }> = []
  private baseLocation: string = "http://local.dev"
  private location: string = this.baseLocation

  navigate(to: string, state = {}) {
    this.history.push({ to, state })
    this.location = this.baseLocation + to;
  }

  getHistory() {
    return [...this.history]
  }

  getFullUrl() {
    return this.location
  }

  getOrigin() {
    return this.location
  }

  getPathname() {
    return this.location
  }
}