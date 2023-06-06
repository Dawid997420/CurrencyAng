import { KeycloakService } from "keycloak-angular";
import { KeycloakConfig } from "keycloak-js";

export interface CustomKeycloakConfig extends KeycloakConfig {
    credentials?: {
      secret: string;
    };
  }
  


export function KeycloakInit ( keycloak:KeycloakService) {

    return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'CurrencyProject',
        clientId: 'CurrencyResourceServer',
        
      } as CustomKeycloakConfig, 
      initOptions:{
        pkceMethod: 'S256',
        redirectUri: 'http://localhost:4200/',
        scope:'openid',
        onLoad:'check-sso',

      }
    });

}
