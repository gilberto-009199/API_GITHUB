"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./core/config/source.config.js"), exports);
__exportStar(require("./core/enum/source.enum.js"), exports);
__exportStar(require("./core/manager/source.manager.js"), exports);
__exportStar(require("./github/api/config/api.config.js"), exports);
__exportStar(require("./github/api/enum/api.enum.js"), exports);
__exportStar(require("./github/api/enum/owner.enum.js"), exports);
__exportStar(require("./github/api/manager/api.manager.js"), exports);
__exportStar(require("./github/api/request/branch.request.js"), exports);
__exportStar(require("./github/api/request/collaborator.request.js"), exports);
__exportStar(require("./github/api/request/commits.request.js"), exports);
__exportStar(require("./github/api/request/contributor.request.js"), exports);
__exportStar(require("./github/api/request/pulls.request.js"), exports);
__exportStar(require("./github/api/request/repository.request.js"), exports);
__exportStar(require("./github/api/request/request.js"), exports);
console.log("oii");
/* Examples API Request

import { ConfigSource, SourceEnum, ManagerSource } from '@core';
import { ConfigApi } from "./github/api/config/api.config";
import { OwnerEnum } from "./github/api/enum/owner.enum";
import { RepositoryRequest } from "./github/api/request/repository.request";
import { PullRequest } from "./github/api/request/pulls.request";
import { CommitRequest } from "./github/api/request/commits.request";
import { BranchRequest } from "./github/api/request/branch.request";
import { CollaboratorRequest } from "./github/api/request/collaborator.request";
import { ContributorRequest } from "./github/api/request/contributor.request";

let mns = ManagerSource.build(new ConfigSource({
    source: SourceEnum.GITHUB,
    api: new ConfigApi({
      token: '-----------',
      owner: 'gilberto-009199',
      org:'Javeiros-brasil',
      ownerEnum: OwnerEnum.org
    })
}));

/* Repository
mns.api.createRequest(RepositoryRequest).findAll().then(data=>{
  console.log(data);
}).catch(er=>{
  console.error(er)
})
/* END Repository */
/* Pulls
mns.api.createRequest(PullRequest).findAll('helpmatch-backend').then(data=>{
  console.log(data);
}).catch(er=>{
  console.error(er)
})
/* END Pulls */
/* COMMIT
mns.api.createRequest(CommitRequest).findAll('helpmatch-backend').then(data=>{
  console.log(data);
}).catch(er=>{
  console.error(er)
})
/* END Commit */
/* Branch
mns.api.createRequest(BranchRequest).findAll('helpmatch-backend').then(data=>{
  console.log(data);
}).catch(er=>{
  console.error(er)
})
/* END Branch */
/* Branch
mns.api.createRequest(BranchRequest).find('helpmatch-backend',"main").then(data=>{
  console.log(data);
}).catch(er=>{
  console.error(er)
})
/* END Branch */
/* Collaborator
mns.api.createRequest(CollaboratorRequest).findAll('helpmatch-backend').then(data=>{
  console.log(data);
}).catch(er=>{
  console.error(er)
})
/* END Contributor */
/* Contributor
mns.api.createRequest(ContributorRequest).findAll('helpmatch-backend').then(data=>{
  console.log(data);
}).catch(er=>{
  console.error(er)
})
/* END Contributor */ 
//# sourceMappingURL=index.js.map
