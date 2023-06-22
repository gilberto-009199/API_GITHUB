export * from "@core/config/source.config.js";
export * from "@core/enum/source.enum.js";
export * from "@core/manager/source.manager.js";
export * from "@github/api/config/api.config.js";
export * from "@github/api/enum/api.enum.js";
export * from "@github/api/enum/owner.enum.js";
export * from "@github/api/manager/api.manager.js";
export * from "@github/api/request/branch.request.js";
export * from "@github/api/request/collaborator.request.js";
export * from "@github/api/request/commits.request.js";
export * from "@github/api/request/contributor.request.js";
export * from "@github/api/request/pulls.request.js";
export * from "@github/api/request/repository.request.js";
export * from "@github/api/request/request.js";


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
      token: '----------------------------------',
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