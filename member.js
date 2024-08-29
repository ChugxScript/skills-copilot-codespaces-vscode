function skillsMember(){
    return{
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}