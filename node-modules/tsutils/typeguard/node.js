"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
function isAccessorDeclaration(node) {
    return node.kind === ts.SyntaxKind.GetAccessor ||
        node.kind === ts.SyntaxKind.SetAccessor;
}
exports.isAccessorDeclaration = isAccessorDeclaration;
function isArrayBindingPattern(node) {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern;
}
exports.isArrayBindingPattern = isArrayBindingPattern;
function isArrayLiteralExpression(node) {
    return node.kind === ts.SyntaxKind.ArrayLiteralExpression;
}
exports.isArrayLiteralExpression = isArrayLiteralExpression;
function isArrayTypeNode(node) {
    return node.kind === ts.SyntaxKind.ArrayType;
}
exports.isArrayTypeNode = isArrayTypeNode;
function isArrowFunction(node) {
    return node.kind === ts.SyntaxKind.ArrowFunction;
}
exports.isArrowFunction = isArrowFunction;
function isAsExpression(node) {
    return node.kind === ts.SyntaxKind.AsExpression;
}
exports.isAsExpression = isAsExpression;
function isAssertionExpression(node) {
    return node.kind === ts.SyntaxKind.AsExpression ||
        node.kind === ts.SyntaxKind.TypeAssertionExpression;
}
exports.isAssertionExpression = isAssertionExpression;
function isAwaitExpression(node) {
    return node.kind === ts.SyntaxKind.AwaitExpression;
}
exports.isAwaitExpression = isAwaitExpression;
function isBinaryExpression(node) {
    return node.kind === ts.SyntaxKind.BinaryExpression;
}
exports.isBinaryExpression = isBinaryExpression;
function isBindingElement(node) {
    return node.kind === ts.SyntaxKind.BindingElement;
}
exports.isBindingElement = isBindingElement;
function isBindingPattern(node) {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern ||
        node.kind === ts.SyntaxKind.ObjectBindingPattern;
}
exports.isBindingPattern = isBindingPattern;
function isBlock(node) {
    return node.kind === ts.SyntaxKind.Block;
}
exports.isBlock = isBlock;
function isBlockLike(node) {
    return node.statements !== undefined;
}
exports.isBlockLike = isBlockLike;
function isBreakOrContinueStatement(node) {
    return node.kind === ts.SyntaxKind.BreakStatement ||
        node.kind === ts.SyntaxKind.ContinueStatement;
}
exports.isBreakOrContinueStatement = isBreakOrContinueStatement;
function isBreakStatement(node) {
    return node.kind === ts.SyntaxKind.BreakStatement;
}
exports.isBreakStatement = isBreakStatement;
function isCallExpression(node) {
    return node.kind === ts.SyntaxKind.CallExpression;
}
exports.isCallExpression = isCallExpression;
function isCallLikeExpression(node) {
    switch (node.kind) {
        case ts.SyntaxKind.CallExpression:
        case ts.SyntaxKind.Decorator:
        case ts.SyntaxKind.JsxOpeningElement:
        case ts.SyntaxKind.JsxSelfClosingElement:
        case ts.SyntaxKind.NewExpression:
        case ts.SyntaxKind.TaggedTemplateExpression:
            return true;
        default:
            return false;
    }
}
exports.isCallLikeExpression = isCallLikeExpression;
function isCallSignatureDeclaration(node) {
    return node.kind === ts.SyntaxKind.CallSignature;
}
exports.isCallSignatureDeclaration = isCallSignatureDeclaration;
function isCaseBlock(node) {
    return node.kind === ts.SyntaxKind.CaseBlock;
}
exports.isCaseBlock = isCaseBlock;
function isCaseClause(node) {
    return node.kind === ts.SyntaxKind.CaseClause;
}
exports.isCaseClause = isCaseClause;
function isCaseOrDefaultClause(node) {
    return node.kind === ts.SyntaxKind.CaseClause ||
        node.kind === ts.SyntaxKind.DefaultClause;
}
exports.isCaseOrDefaultClause = isCaseOrDefaultClause;
function isCatchClause(node) {
    return node.kind === ts.SyntaxKind.CatchClause;
}
exports.isCatchClause = isCatchClause;
function isClassDeclaration(node) {
    return node.kind === ts.SyntaxKind.ClassDeclaration;
}
exports.isClassDeclaration = isClassDeclaration;
function isClassExpression(node) {
    return node.kind === ts.SyntaxKind.ClassExpression;
}
exports.isClassExpression = isClassExpression;
function isClassLikeDeclaration(node) {
    return node.kind === ts.SyntaxKind.ClassDeclaration ||
        node.kind === ts.SyntaxKind.ClassExpression;
}
exports.isClassLikeDeclaration = isClassLikeDeclaration;
function isCommaListExpression(node) {
    return node.kind === ts.SyntaxKind.CommaListExpression;
}
exports.isCommaListExpression = isCommaListExpression;
function isConditionalExpression(node) {
    return node.kind === ts.SyntaxKind.ConditionalExpression;
}
exports.isConditionalExpression = isConditionalExpression;
function isConditionalTypeNode(node) {
    return node.kind === ts.SyntaxKind.ConditionalType;
}
exports.isConditionalTypeNode = isConditionalTypeNode;
function isConstructorDeclaration(node) {
    return node.kind === ts.SyntaxKind.Constructor;
}
exports.isConstructorDeclaration = isConstructorDeclaration;
function isConstructorTypeNode(node) {
    return node.kind === ts.SyntaxKind.ConstructorType;
}
exports.isConstructorTypeNode = isConstructorTypeNode;
function isConstructSignatureDeclaration(node) {
    return node.kind === ts.SyntaxKind.ConstructSignature;
}
exports.isConstructSignatureDeclaration = isConstructSignatureDeclaration;
function isContinueStatement(node) {
    return node.kind === ts.SyntaxKind.ContinueStatement;
}
exports.isContinueStatement = isContinueStatement;
function isComputedPropertyName(node) {
    return node.kind === ts.SyntaxKind.ComputedPropertyName;
}
exports.isComputedPropertyName = isComputedPropertyName;
function isDebuggerStatement(node) {
    return node.kind === ts.SyntaxKind.DebuggerStatement;
}
exports.isDebuggerStatement = isDebuggerStatement;
function isDecorator(node) {
    return node.kind === ts.SyntaxKind.Decorator;
}
exports.isDecorator = isDecorator;
function isDefaultClause(node) {
    return node.kind === ts.SyntaxKind.DefaultClause;
}
exports.isDefaultClause = isDefaultClause;
function isDeleteExpression(node) {
    return node.kind === ts.SyntaxKind.DeleteExpression;
}
exports.isDeleteExpression = isDeleteExpression;
function isDoStatement(node) {
    return node.kind === ts.SyntaxKind.DoStatement;
}
exports.isDoStatement = isDoStatement;
function isElementAccessExpression(node) {
    return node.kind === ts.SyntaxKind.ElementAccessExpression;
}
exports.isElementAccessExpression = isElementAccessExpression;
function isEmptyStatement(node) {
    return node.kind === ts.SyntaxKind.EmptyStatement;
}
exports.isEmptyStatement = isEmptyStatement;
function isEntityName(node) {
    return node.kind === ts.SyntaxKind.Identifier || isQualifiedName(node);
}
exports.isEntityName = isEntityName;
function isEntityNameExpression(node) {
    return node.kind === ts.SyntaxKind.Identifier ||
        isPropertyAccessExpression(node) && isEntityNameExpression(node.expression);
}
exports.isEntityNameExpression = isEntityNameExpression;
function isEnumDeclaration(node) {
    return node.kind === ts.SyntaxKind.EnumDeclaration;
}
exports.isEnumDeclaration = isEnumDeclaration;
function isEnumMember(node) {
    return node.kind === ts.SyntaxKind.EnumMember;
}
exports.isEnumMember = isEnumMember;
function isExportAssignment(node) {
    return node.kind === ts.SyntaxKind.ExportAssignment;
}
exports.isExportAssignment = isExportAssignment;
function isExportDeclaration(node) {
    return node.kind === ts.SyntaxKind.ExportDeclaration;
}
exports.isExportDeclaration = isExportDeclaration;
function isExportSpecifier(node) {
    return node.kind === ts.SyntaxKind.ExportSpecifier;
}
exports.isExportSpecifier = isExportSpecifier;
function isExpression(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ArrayLiteralExpression:
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.AsExpression:
        case ts.SyntaxKind.AwaitExpression:
        case ts.SyntaxKind.BinaryExpression:
        case ts.SyntaxKind.CallExpression:
        case ts.SyntaxKind.ClassExpression:
        case ts.SyntaxKind.CommaListExpression:
        case ts.SyntaxKind.ConditionalExpression:
        case ts.SyntaxKind.DeleteExpression:
        case ts.SyntaxKind.ElementAccessExpression:
        case ts.SyntaxKind.FalseKeyword:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.Identifier:
        case ts.SyntaxKind.JsxElement:
        case ts.SyntaxKind.JsxFragment:
        case ts.SyntaxKind.JsxExpression:
        case ts.SyntaxKind.JsxOpeningElement:
        case ts.SyntaxKind.JsxOpeningFragment:
        case ts.SyntaxKind.JsxSelfClosingElement:
        case ts.SyntaxKind.MetaProperty:
        case ts.SyntaxKind.NewExpression:
        case ts.SyntaxKind.NonNullExpression:
        case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
        case ts.SyntaxKind.NullKeyword:
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.ObjectLiteralExpression:
        case ts.SyntaxKind.OmittedExpression:
        case ts.SyntaxKind.ParenthesizedExpression:
        case ts.SyntaxKind.PostfixUnaryExpression:
        case ts.SyntaxKind.PrefixUnaryExpression:
        case ts.SyntaxKind.PropertyAccessExpression:
        case ts.SyntaxKind.RegularExpressionLiteral:
        case ts.SyntaxKind.SpreadElement:
        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.SuperKeyword:
        case ts.SyntaxKind.TaggedTemplateExpression:
        case ts.SyntaxKind.TemplateExpression:
        case ts.SyntaxKind.ThisKeyword:
        case ts.SyntaxKind.TrueKeyword:
        case ts.SyntaxKind.TypeAssertionExpression:
        case ts.SyntaxKind.TypeOfExpression:
        case ts.SyntaxKind.VoidExpression:
        case ts.SyntaxKind.YieldExpression:
            return true;
        default:
            return false;
    }
}
exports.isExpression = isExpression;
function isExpressionStatement(node) {
    return node.kind === ts.SyntaxKind.ExpressionStatement;
}
exports.isExpressionStatement = isExpressionStatement;
function isExpressionWithTypeArguments(node) {
    return node.kind === ts.SyntaxKind.ExpressionWithTypeArguments;
}
exports.isExpressionWithTypeArguments = isExpressionWithTypeArguments;
function isExternalModuleReference(node) {
    return node.kind === ts.SyntaxKind.ExternalModuleReference;
}
exports.isExternalModuleReference = isExternalModuleReference;
function isForInStatement(node) {
    return node.kind === ts.SyntaxKind.ForInStatement;
}
exports.isForInStatement = isForInStatement;
function isForInOrOfStatement(node) {
    return node.kind === ts.SyntaxKind.ForOfStatement || node.kind === ts.SyntaxKind.ForInStatement;
}
exports.isForInOrOfStatement = isForInOrOfStatement;
function isForOfStatement(node) {
    return node.kind === ts.SyntaxKind.ForOfStatement;
}
exports.isForOfStatement = isForOfStatement;
function isForStatement(node) {
    return node.kind === ts.SyntaxKind.ForStatement;
}
exports.isForStatement = isForStatement;
function isFunctionDeclaration(node) {
    return node.kind === ts.SyntaxKind.FunctionDeclaration;
}
exports.isFunctionDeclaration = isFunctionDeclaration;
function isFunctionExpression(node) {
    return node.kind === ts.SyntaxKind.FunctionExpression;
}
exports.isFunctionExpression = isFunctionExpression;
function isFunctionTypeNode(node) {
    return node.kind === ts.SyntaxKind.FunctionType;
}
exports.isFunctionTypeNode = isFunctionTypeNode;
function isGetAccessorDeclaration(node) {
    return node.kind === ts.SyntaxKind.GetAccessor;
}
exports.isGetAccessorDeclaration = isGetAccessorDeclaration;
function isIdentifier(node) {
    return node.kind === ts.SyntaxKind.Identifier;
}
exports.isIdentifier = isIdentifier;
function isIfStatement(node) {
    return node.kind === ts.SyntaxKind.IfStatement;
}
exports.isIfStatement = isIfStatement;
function isImportClause(node) {
    return node.kind === ts.SyntaxKind.ImportClause;
}
exports.isImportClause = isImportClause;
function isImportDeclaration(node) {
    return node.kind === ts.SyntaxKind.ImportDeclaration;
}
exports.isImportDeclaration = isImportDeclaration;
function isImportEqualsDeclaration(node) {
    return node.kind === ts.SyntaxKind.ImportEqualsDeclaration;
}
exports.isImportEqualsDeclaration = isImportEqualsDeclaration;
function isImportSpecifier(node) {
    return node.kind === ts.SyntaxKind.ImportSpecifier;
}
exports.isImportSpecifier = isImportSpecifier;
function isImportTypeNode(node) {
    return node.kind === ts.SyntaxKind.ImportType;
}
exports.isImportTypeNode = isImportTypeNode;
function isIndexedAccessTypeNode(node) {
    return node.kind === ts.SyntaxKind.IndexedAccessType;
}
exports.isIndexedAccessTypeNode = isIndexedAccessTypeNode;
function isIndexSignatureDeclaration(node) {
    return node.kind === ts.SyntaxKind.IndexSignature;
}
exports.isIndexSignatureDeclaration = isIndexSignatureDeclaration;
function isInferTypeNode(node) {
    return node.kind === ts.SyntaxKind.InferType;
}
exports.isInferTypeNode = isInferTypeNode;
function isInterfaceDeclaration(node) {
    return node.kind === ts.SyntaxKind.InterfaceDeclaration;
}
exports.isInterfaceDeclaration = isInterfaceDeclaration;
function isIntersectionTypeNode(node) {
    return node.kind === ts.SyntaxKind.IntersectionType;
}
exports.isIntersectionTypeNode = isIntersectionTypeNode;
function isIterationStatement(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ForStatement:
        case ts.SyntaxKind.ForOfStatement:
        case ts.SyntaxKind.ForInStatement:
        case ts.SyntaxKind.WhileStatement:
        case ts.SyntaxKind.DoStatement:
            return true;
        default:
            return false;
    }
}
exports.isIterationStatement = isIterationStatement;
function isJsDoc(node) {
    return node.kind === ts.SyntaxKind.JSDocComment;
}
exports.isJsDoc = isJsDoc;
function isJsxAttribute(node) {
    return node.kind === ts.SyntaxKind.JsxAttribute;
}
exports.isJsxAttribute = isJsxAttribute;
function isJsxAttributeLike(node) {
    return node.kind === ts.SyntaxKind.JsxAttribute ||
        node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}
exports.isJsxAttributeLike = isJsxAttributeLike;
function isJsxAttributes(node) {
    return node.kind === ts.SyntaxKind.JsxAttributes;
}
exports.isJsxAttributes = isJsxAttributes;
function isJsxClosingElement(node) {
    return node.kind === ts.SyntaxKind.JsxClosingElement;
}
exports.isJsxClosingElement = isJsxClosingElement;
function isJsxClosingFragment(node) {
    return node.kind === ts.SyntaxKind.JsxClosingFragment;
}
exports.isJsxClosingFragment = isJsxClosingFragment;
function isJsxElement(node) {
    return node.kind === ts.SyntaxKind.JsxElement;
}
exports.isJsxElement = isJsxElement;
function isJsxExpression(node) {
    return node.kind === ts.SyntaxKind.JsxExpression;
}
exports.isJsxExpression = isJsxExpression;
function isJsxFramgment(node) {
    return isJsxFragment(node);
}
exports.isJsxFramgment = isJsxFramgment;
function isJsxFragment(node) {
    return node.kind === ts.SyntaxKind.JsxFragment;
}
exports.isJsxFragment = isJsxFragment;
function isJsxOpeningElement(node) {
    return node.kind === ts.SyntaxKind.JsxOpeningElement;
}
exports.isJsxOpeningElement = isJsxOpeningElement;
function isJsxOpeningFragment(node) {
    return node.kind === ts.SyntaxKind.JsxOpeningFragment;
}
exports.isJsxOpeningFragment = isJsxOpeningFragment;
function isJsxOpeningLikeElement(node) {
    return node.kind === ts.SyntaxKind.JsxOpeningElement ||
        node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}
exports.isJsxOpeningLikeElement = isJsxOpeningLikeElement;
function isJsxSelfClosingElement(node) {
    return node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}
exports.isJsxSelfClosingElement = isJsxSelfClosingElement;
function isJsxSpreadAttribute(node) {
    return node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}
exports.isJsxSpreadAttribute = isJsxSpreadAttribute;
function isJsxText(node) {
    return node.kind === ts.SyntaxKind.JsxText;
}
exports.isJsxText = isJsxText;
function isLabeledStatement(node) {
    return node.kind === ts.SyntaxKind.LabeledStatement;
}
exports.isLabeledStatement = isLabeledStatement;
function isLiteralExpression(node) {
    return node.kind >= ts.SyntaxKind.FirstLiteralToken &&
        node.kind <= ts.SyntaxKind.LastLiteralToken;
}
exports.isLiteralExpression = isLiteralExpression;
function isLiteralTypeNode(node) {
    return node.kind === ts.SyntaxKind.LiteralType;
}
exports.isLiteralTypeNode = isLiteralTypeNode;
function isMappedTypeNode(node) {
    return node.kind === ts.SyntaxKind.MappedType;
}
exports.isMappedTypeNode = isMappedTypeNode;
function isMetaProperty(node) {
    return node.kind === ts.SyntaxKind.MetaProperty;
}
exports.isMetaProperty = isMetaProperty;
function isMethodDeclaration(node) {
    return node.kind === ts.SyntaxKind.MethodDeclaration;
}
exports.isMethodDeclaration = isMethodDeclaration;
function isMethodSignature(node) {
    return node.kind === ts.SyntaxKind.MethodSignature;
}
exports.isMethodSignature = isMethodSignature;
function isModuleBlock(node) {
    return node.kind === ts.SyntaxKind.ModuleBlock;
}
exports.isModuleBlock = isModuleBlock;
function isModuleDeclaration(node) {
    return node.kind === ts.SyntaxKind.ModuleDeclaration;
}
exports.isModuleDeclaration = isModuleDeclaration;
function isNamedExports(node) {
    return node.kind === ts.SyntaxKind.NamedExports;
}
exports.isNamedExports = isNamedExports;
function isNamedImports(node) {
    return node.kind === ts.SyntaxKind.NamedImports;
}
exports.isNamedImports = isNamedImports;
function isNamespaceDeclaration(node) {
    return isModuleDeclaration(node) &&
        node.name.kind === ts.SyntaxKind.Identifier &&
        node.body !== undefined &&
        (node.body.kind === ts.SyntaxKind.ModuleBlock ||
            isNamespaceDeclaration(node.body));
}
exports.isNamespaceDeclaration = isNamespaceDeclaration;
function isNamespaceImport(node) {
    return node.kind === ts.SyntaxKind.NamespaceImport;
}
exports.isNamespaceImport = isNamespaceImport;
function isNamespaceExportDeclaration(node) {
    return node.kind === ts.SyntaxKind.NamespaceExportDeclaration;
}
exports.isNamespaceExportDeclaration = isNamespaceExportDeclaration;
function isNewExpression(node) {
    return node.kind === ts.SyntaxKind.NewExpression;
}
exports.isNewExpression = isNewExpression;
function isNonNullExpression(node) {
    return node.kind === ts.SyntaxKind.NonNullExpression;
}
exports.isNonNullExpression = isNonNullExpression;
function isNoSubstitutionTemplateLiteral(node) {
    return node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}
exports.isNoSubstitutionTemplateLiteral = isNoSubstitutionTemplateLiteral;
function isNumericLiteral(node) {
    return node.kind === ts.SyntaxKind.NumericLiteral;
}
exports.isNumericLiteral = isNumericLiteral;
function isObjectBindingPattern(node) {
    return node.kind === ts.SyntaxKind.ObjectBindingPattern;
}
exports.isObjectBindingPattern = isObjectBindingPattern;
function isObjectLiteralExpression(node) {
    return node.kind === ts.SyntaxKind.ObjectLiteralExpression;
}
exports.isObjectLiteralExpression = isObjectLiteralExpression;
function isOmittedExpression(node) {
    return node.kind === ts.SyntaxKind.OmittedExpression;
}
exports.isOmittedExpression = isOmittedExpression;
function isParameterDeclaration(node) {
    return node.kind === ts.SyntaxKind.Parameter;
}
exports.isParameterDeclaration = isParameterDeclaration;
function isParenthesizedExpression(node) {
    return node.kind === ts.SyntaxKind.ParenthesizedExpression;
}
exports.isParenthesizedExpression = isParenthesizedExpression;
function isParenthesizedTypeNode(node) {
    return node.kind === ts.SyntaxKind.ParenthesizedType;
}
exports.isParenthesizedTypeNode = isParenthesizedTypeNode;
function isPostfixUnaryExpression(node) {
    return node.kind === ts.SyntaxKind.PostfixUnaryExpression;
}
exports.isPostfixUnaryExpression = isPostfixUnaryExpression;
function isPrefixUnaryExpression(node) {
    return node.kind === ts.SyntaxKind.PrefixUnaryExpression;
}
exports.isPrefixUnaryExpression = isPrefixUnaryExpression;
function isPropertyAccessExpression(node) {
    return node.kind === ts.SyntaxKind.PropertyAccessExpression;
}
exports.isPropertyAccessExpression = isPropertyAccessExpression;
function isPropertyAssignment(node) {
    return node.kind === ts.SyntaxKind.PropertyAssignment;
}
exports.isPropertyAssignment = isPropertyAssignment;
function isPropertyDeclaration(node) {
    return node.kind === ts.SyntaxKind.PropertyDeclaration;
}
exports.isPropertyDeclaration = isPropertyDeclaration;
function isPropertySignature(node) {
    return node.kind === ts.SyntaxKind.PropertySignature;
}
exports.isPropertySignature = isPropertySignature;
function isQualifiedName(node) {
    return node.kind === ts.SyntaxKind.QualifiedName;
}
exports.isQualifiedName = isQualifiedName;
function isRegularExpressionLiteral(node) {
    return node.kind === ts.SyntaxKind.RegularExpressionLiteral;
}
exports.isRegularExpressionLiteral = isRegularExpressionLiteral;
function isReturnStatement(node) {
    return node.kind === ts.SyntaxKind.ReturnStatement;
}
exports.isReturnStatement = isReturnStatement;
function isSetAccessorDeclaration(node) {
    return node.kind === ts.SyntaxKind.SetAccessor;
}
exports.isSetAccessorDeclaration = isSetAccessorDeclaration;
function isShorthandPropertyAssignment(node) {
    return node.kind === ts.SyntaxKind.ShorthandPropertyAssignment;
}
exports.isShorthandPropertyAssignment = isShorthandPropertyAssignment;
function isSignatureDeclaration(node) {
    return node.parameters !== undefined;
}
exports.isSignatureDeclaration = isSignatureDeclaration;
function isSourceFile(node) {
    return node.kind === ts.SyntaxKind.SourceFile;
}
exports.isSourceFile = isSourceFile;
function isSpreadAssignment(node) {
    return node.kind === ts.SyntaxKind.SpreadAssignment;
}
exports.isSpreadAssignment = isSpreadAssignment;
function isSpreadElement(node) {
    return node.kind === ts.SyntaxKind.SpreadElement;
}
exports.isSpreadElement = isSpreadElement;
function isStringLiteral(node) {
    return node.kind === ts.SyntaxKind.StringLiteral;
}
exports.isStringLiteral = isStringLiteral;
function isSwitchStatement(node) {
    return node.kind === ts.SyntaxKind.SwitchStatement;
}
exports.isSwitchStatement = isSwitchStatement;
function isSyntaxList(node) {
    return node.kind === ts.SyntaxKind.SyntaxList;
}
exports.isSyntaxList = isSyntaxList;
function isTaggedTemplateExpression(node) {
    return node.kind === ts.SyntaxKind.TaggedTemplateExpression;
}
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
function isTemplateExpression(node) {
    return node.kind === ts.SyntaxKind.TemplateExpression;
}
exports.isTemplateExpression = isTemplateExpression;
function isTemplateLiteral(node) {
    return node.kind === ts.SyntaxKind.TemplateExpression ||
        node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}
exports.isTemplateLiteral = isTemplateLiteral;
function isTextualLiteral(node) {
    return node.kind === ts.SyntaxKind.StringLiteral ||
        node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}
exports.isTextualLiteral = isTextualLiteral;
function isThrowStatement(node) {
    return node.kind === ts.SyntaxKind.ThrowStatement;
}
exports.isThrowStatement = isThrowStatement;
function isTryStatement(node) {
    return node.kind === ts.SyntaxKind.TryStatement;
}
exports.isTryStatement = isTryStatement;
function isTupleTypeNode(node) {
    return node.kind === ts.SyntaxKind.TupleType;
}
exports.isTupleTypeNode = isTupleTypeNode;
function isTypeAliasDeclaration(node) {
    return node.kind === ts.SyntaxKind.TypeAliasDeclaration;
}
exports.isTypeAliasDeclaration = isTypeAliasDeclaration;
function isTypeAssertion(node) {
    return node.kind === ts.SyntaxKind.TypeAssertionExpression;
}
exports.isTypeAssertion = isTypeAssertion;
function isTypeLiteralNode(node) {
    return node.kind === ts.SyntaxKind.TypeLiteral;
}
exports.isTypeLiteralNode = isTypeLiteralNode;
function isTypeOfExpression(node) {
    return node.kind === ts.SyntaxKind.TypeOfExpression;
}
exports.isTypeOfExpression = isTypeOfExpression;
function isTypeOperatorNode(node) {
    return node.kind === ts.SyntaxKind.TypeOperator;
}
exports.isTypeOperatorNode = isTypeOperatorNode;
function isTypeParameterDeclaration(node) {
    return node.kind === ts.SyntaxKind.TypeParameter;
}
exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
function isTypePredicateNode(node) {
    return node.kind === ts.SyntaxKind.TypePredicate;
}
exports.isTypePredicateNode = isTypePredicateNode;
function isTypeReferenceNode(node) {
    return node.kind === ts.SyntaxKind.TypeReference;
}
exports.isTypeReferenceNode = isTypeReferenceNode;
function isTypeQueryNode(node) {
    return node.kind === ts.SyntaxKind.TypeQuery;
}
exports.isTypeQueryNode = isTypeQueryNode;
function isUnionTypeNode(node) {
    return node.kind === ts.SyntaxKind.UnionType;
}
exports.isUnionTypeNode = isUnionTypeNode;
function isVariableDeclaration(node) {
    return node.kind === ts.SyntaxKind.VariableDeclaration;
}
exports.isVariableDeclaration = isVariableDeclaration;
function isVariableStatement(node) {
    return node.kind === ts.SyntaxKind.VariableStatement;
}
exports.isVariableStatement = isVariableStatement;
function isVariableDeclarationList(node) {
    return node.kind === ts.SyntaxKind.VariableDeclarationList;
}
exports.isVariableDeclarationList = isVariableDeclarationList;
function isVoidExpression(node) {
    return node.kind === ts.SyntaxKind.VoidExpression;
}
exports.isVoidExpression = isVoidExpression;
function isWhileStatement(node) {
    return node.kind === ts.SyntaxKind.WhileStatement;
}
exports.isWhileStatement = isWhileStatement;
function isWithStatement(node) {
    return node.kind === ts.SyntaxKind.WithStatement;
}
exports.isWithStatement = isWithStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBaUM7QUFFakMsK0JBQXNDLElBQWE7SUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVztRQUMxQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0FBQ2hELENBQUM7QUFIRCxzREFHQztBQUVELCtCQUFzQyxJQUFhO0lBQy9DLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO0FBQzNELENBQUM7QUFGRCxzREFFQztBQUVELGtDQUF5QyxJQUFhO0lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO0FBQzlELENBQUM7QUFGRCw0REFFQztBQUVELHlCQUFnQyxJQUFhO0lBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztBQUNqRCxDQUFDO0FBRkQsMENBRUM7QUFFRCx5QkFBZ0MsSUFBYTtJQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDckQsQ0FBQztBQUZELDBDQUVDO0FBRUQsd0JBQStCLElBQWE7SUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO0FBQ3BELENBQUM7QUFGRCx3Q0FFQztBQUVELCtCQUFzQyxJQUFhO0lBQy9DLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVk7UUFDM0MsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELENB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